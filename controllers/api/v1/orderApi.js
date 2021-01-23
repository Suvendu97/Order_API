const ORDER = require('../../../models/order');
const { findOne } = require('../../../models/order');

// create order in db and register
module.exports.createOrder = async function (req, res) {

    try {
        // console.log("req body:  ",req.body);
            let order = await ORDER.create(req.body);
            console.log('Order added Successfully!');
            return res.json(200, {
                status: 200,
                message: 'Order addedSuccessfully!',
                data:{
                    order: {
                        _id: order.id,
                        name: order.name
                    }
                }
                
            })
        
    } catch (err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }

}

// get own Details
module.exports.find = async function (req, res) {
    try{
        let order =await ORDER.find({name: req.body.name});
        console.log("order", order)
        if(order) {
            return res.json(200, {
                status: 200,
                message: 'Order Details:',
                order: order
                
            });
        } else {
            return res.json(500, { 
                status: 500,
                message: 'Order not found!'
            })
        }

    } catch (err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }
             
}
