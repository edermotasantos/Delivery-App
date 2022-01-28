const express = require('express');
const rescue = require('express-rescue');

const registerCustomerUser = require('./registerCustomerUser');
const emailAndNameValidation = require('../../middlewares/users/emailAndNameValidation');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(emailAndNameValidation), rescue(registerCustomerUser));

module.exports = router;
