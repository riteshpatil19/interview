import Payment from "../models/payment.model.js";
import User from "../models/user.model.js";
import razorpay from "../services/razorpay.service.js";
import crypto from "crypto";
import { PLANS } from "../config/plans.js";

export const createOrder = async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { planId } = req.body;

    const plan = PLANS[planId];
    if (!plan) {
      return res.status(400).json({ message: "Invalid plan selected" });
    }

    const options = {
      amount: Math.round(plan.amount * 100), // paise, avoid float errors
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    await Payment.create({
      userId: req.userId,
      planId,
      amount: plan.amount,
      credits: plan.credits,
      razorpayOrderId: order.id,
      status: "created",
    });

    return res.json(order);
  } catch (error) {
    console.error("createOrder error:", error);
    return res.status(500).json({ message: "Failed to create Razorpay order" });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ message: "Missing payment verification details" });
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    const expectedBuffer = Buffer.from(expectedSignature, "utf8");
    const receivedBuffer = Buffer.from(razorpay_signature, "utf8");

    const isValidSignature =
      expectedBuffer.length === receivedBuffer.length &&
      crypto.timingSafeEqual(expectedBuffer, receivedBuffer);

    if (!isValidSignature) {
      return res.status(400).json({ message: "Invalid payment signature" });
    }

    const payment = await Payment.findOne({ razorpayOrderId: razorpay_order_id });
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    if (payment.status === "paid") {
      return res.json({ message: "Already processed" });
    }

    payment.status = "paid";
    payment.razorpayPaymentId = razorpay_payment_id;
    await payment.save();

    const updatedUser = await User.findByIdAndUpdate(
      payment.userId,
      { $inc: { credits: payment.credits } },
      { new: true }
    );

    return res.json({
      success: true,
      message: "Payment verified and credits added",
      user: updatedUser,
    });
  } catch (error) {
    console.error("verifyPayment error:", error);
    return res.status(500).json({ message: "Failed to verify Razorpay payment" });
  }
};