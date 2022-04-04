const router = require('express').Router();
// const CustomerController = require('../controller/customer');
const customerRouter = require('./customer')

// router.post('/customer', CustomerController.inquiryCus)
router.use('/customer', customerRouter)

module.exports = router