const express = require("express");
const router = express.Router();

// route for order requests
router.use('/order', require('./order'));



module.exports = router;