// server.js
const express = require('express');
const { Sequelize } = require('sequelize');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

// Inicjalizacja aplikacji Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(session({ secret: 'SECRET', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Konfiguracja SQLite z Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Modele
const User = sequelize.define('User', {
  googleId: {
    type: Sequelize.STRING,
    unique: true
  }
});

// Konfiguracja Passport
require('./config/passport')(passport, User);

// Trasy
app.use('/auth', require('./routes/auth')(passport));
app.use('/api', require('./routes/user')(User));

// Start serwera
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Synchronizacja bazy danych
sequelize.sync().then(() => {
  console.log('Database synced');
});
