// require mongoose 
const mongoose = require('mongoose');

// ORDER SCHEMA
const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    value: { 
        type: Number
    },
    item: { 
        type: String 
    },
    order: {
        type: String 
    }
}, {
    timestamps: true
});

const ORDER = mongoose.model('ORDER', orderSchema);

module.exports = ORDER;