const express = require('express');
const emailAndNameValidation = require('../../middlewares/users/emailAndNameValidation');

const router = express.Router({ mergeParams: true });

router.post('/', emailAndNameValidation, require('./registerCustomerUser'));

module.exports = router;
