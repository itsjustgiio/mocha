# 📚 Mocha — Vocabulary Learning Web App

**Mocha** is a full-stack vocabulary learning platform designed to help users improve their word retention through engaging UI, spaced repetition (coming soon), and secure user authentication. Built with the **MERN** stack and styled using **Tailwind CSS** for a sleek and responsive experience.

## 🚀 Features

- 🔐 **JWT Authentication** — Secure user login/signup with protected routes  
- 📋 **Word Practice Interface** — Add, review, and track vocabulary  
- 🎨 **Custom UI/UX** — Styled with Tailwind CSS and designed in Figma  
- 💾 **MongoDB Backend** — Store user accounts and vocabulary data  
- 🔁 **Planned: Spaced Repetition** — Algorithm for intelligent word review scheduling  

## 🛠️ Tech Stack

**Frontend**: React, Tailwind CSS  
**Backend**: Node.js, Express.js  
**Database**: MongoDB  
**Authentication**: JWT (JSON Web Token)  
**Design**: Figma 

## 📦 Installation

> ⚠️ Requires [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/mocha.git
cd mocha
```

### 2. Set up environment variables

Create a .env file in the server/ directory and add:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
### 3. Install dependencies
```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 4. Run the app

```bash
# From root
npm run dev
```
This will concurrently run both the React frontend and Express backend.

### 📂 Folder Structure

```bash
mocha/
├── client/        # React frontend
├── server/        # Express backend
├── .env           # Environment variables
└── README.md
```
### ✨ Credits
Built by Giovanni Carrion as a personal project to explore full-stack development and design.
