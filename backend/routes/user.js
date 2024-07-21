// routes/user.js
const express = require('express');
const router = express.Router();

module.exports = (User) => {
  router.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send('You are not authenticated');
    }
    res.send(req.user);
  });

  return router;
};
