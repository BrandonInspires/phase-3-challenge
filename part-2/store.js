#!/usr/bin/env node

const {
    productList,
    shopperOrders,
    realShoppers
} = require('./database')
const command = process.argv[2];
const argument = process.argv[3];
const print = require('node-print');

function routes(command, argument) {
    switch (command) {
        case "product-list":
            return productList(argument)
                .then(list => print.pt(list))
                .catch(error => error);
            break;
        case "shopper-orders":
            return shopperOrders(argument)
                .then(orders => print.pt(orders))
                .catch(error => error);
            break;
        case "real-shoppers":
            return realShoppers()
                .then(shoppers => print.pt(shoppers))
                .catch(error => error);
            break;

        default:
            console.log("Please Enter 'product-list', 'shopper-orders', or 'real-shoppers'")
            break;
    }
}
routes(command, argument)

module.exports = routes