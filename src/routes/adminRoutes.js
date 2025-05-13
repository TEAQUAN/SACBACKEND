const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');



console.log('Admin login route registered');
router.post('/login', adminController.login);
module.exports = router;
