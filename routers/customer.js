const router = require("express").Router();
const CustomerController = require("../controller/customer");

router.post("/inquiry", CustomerController.inquiryCus);
// router.post("/status", CustomerController.inquiryStatus);
// router.post("/test", CustomerController.test);

module.exports = router;
