#!/usr/bin/env node

const {
    productList,
    shopperOrders,
    realShoppers
} = require('./database')
const command = process.argv[2];
const argument = process.argv[3];
const print = require('node-print');

function route(command, argument) {
    switch (command) {
        case "product-list":
            productList(argument)
                .then(function (data) {
                    print.pt(data)
                })
                .catch(function (error) {
                    console.log(error)
                });
            break;
        case "shopper-orders":
            shopperOrders(argument).then(function (data) {
                print.pt(data)
            });
            break;
        case "real-shoppers":
            realShoppers().then(function (data) {
                print.pt(data)
            });
            break;
        default:
            console.log("Please Enter 'product-list', 'shopper-orders', or 'real-shoppers'")
            break;
    }
}
route(command, argument)