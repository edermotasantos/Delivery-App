const express = require('express');
const rescue = require('express-rescue');

const registerCustomerUser = require('./registerCustomerUser');
const loginUser = require('./login');
const emailAndNameValidation = require('../../middlewares/users/emailAndNameValidation');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(emailAndNameValidation), rescue(registerCustomerUser));
router.post('/login', rescue(loginUser));

module.exports = router;
