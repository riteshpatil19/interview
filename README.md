# 🚀 AI Interview Preparation Platform

A full-stack SaaS-style AI platform that helps users prepare for interviews by generating personalized interview questions from their resumes, practicing technical and HR rounds, and receiving intelligent feedback.

## ✨ Features

* 📄 Upload Resume (PDF)
* 🤖 AI-Generated Interview Questions
* 💻 Technical Interview Practice
* 🗣️ HR Interview Practice
* 📊 Intelligent Feedback & Performance Analysis
* 💳 Credit-Based Access System
* 💰 Secure Payments with Razorpay
* 🔐 Firebase Google Authentication
* 🎨 Smooth Animations with Framer Motion
* ☁️ Full Stack Deployment on Render
* 📱 Responsive and Modern UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Framer Motion
* CSS3 / JavaScript

### Backend

* Node.js
* Express.js
* MongoDB

### Authentication

* Firebase Google Authentication

### Payments

* Razorpay Payment Gateway

### Deployment

* Render

---

## 📂 Project Structure

```bash
project/
├── client/          # React Frontend
├── server/          # Node.js & Express Backend
├── models/          # MongoDB Models
├── controllers/     # Business Logic
├── routes/          # API Routes
├── middleware/      # Authentication & Validation
├── services/        # AI and Payment Services
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/ai-interview-platform.git
cd ai-interview-platform
```

### Install Dependencies

#### Frontend

```bash
cd client
npm install
npm run dev
```

#### Backend

```bash
cd server
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
FIREBASE_API_KEY=your_firebase_api_key
```

---

## 🚀 How It Works

1. User signs in using Google Authentication.
2. User uploads a resume in PDF format.
3. The AI analyzes the resume and generates interview questions.
4. Users practice technical and HR interview rounds.
5. The system provides intelligent feedback and suggestions.
6. Credits are deducted for premium features.
7. Users can purchase additional credits through Razorpay.

---

## 🎯 Perfect For

* MERN Stack Developers
* Final Year Major Projects
* SaaS Builders
* Portfolio Projects
* Freelancers
* Developers learning Payment Integration and Authentication

---

## 🌟 Future Enhancements

* Voice-Based Interview Practice
* Video Interview Simulation
* AI Resume Scoring
* Multi-Language Support
* Interview Progress Dashboard
* Admin Analytics Panel

---


