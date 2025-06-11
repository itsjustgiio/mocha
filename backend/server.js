require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');


const app = express();
const PORT = process.env.PORT || 5000;

// debugging:
//console.log("MONGO_URI =", process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());

//Connect routes
app.use('/api/auth', authRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('Mocha backend is running!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
})
.catch((err) => console.error('❌ MongoDB connection error:', err));