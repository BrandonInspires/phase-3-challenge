#!/usr/bin/env node
const { productList, shopperOrders, realShoppers } = require('./database')
const command = process.argv[2];
const argument = process.argv[3];
const print = require('node-print');


// console.log(`process.argv[0]:: ${process.argv[0]}`)
// console.log(`process.argv[1]:: ${process.argv[1]}`)
// console.log(`process.argv[2]:: ${command}`)
// console.log(`process.argv[3]:: ${argument}`)
// console.log(`productList:: ${productList}`)
// console.log(`shopperOrders:: ${shopperOrders}`)
// console.log(`realShoppers:: ${realShoppers}`)
function route (command, argument) {
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
// function display () {
// //  print.pt(route(command, argument))

// }
// display();
