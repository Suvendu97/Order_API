const express = require("express");
const router = express.Router();

const orderRequests = require('../../../controllers/api/v1/orderApi');

// post req to add order
router.post('/add', orderRequests.createOrder);

router.get('/find', orderRequests.find );

module.exports = router;