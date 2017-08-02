// Importing Testable Functions

const {
    productList,
    shopperOrders,
    realShoppers
} = require('../database')

// importing test data

let {
    list,
    orders,
    shoppers
} = require('./data')

// For Pretty Tables
const print = require('node-print');

const assert = require('chai').assert;

describe("Product List Function", () => {
    it('product-list function should return a table of dairy products', () => {
        return productList("dairy")
            .then((data) => {
                assert(print.pt(data) == print.pt(list), "does not return a table")
            })
    })
})
describe("Shopper Order Function", () => {
    it("shopper-order function should return shopper #4's orders", () => {
        return shopperOrders(4)
            .then((data) => {
                assert(print.pt(data) == print.pt(orders), "does not return a table")
            })
    })
})
describe("Real Shoppers Function", () => {
    it('real-shoppers function should return a table of shoppers', () => {
        return realShoppers()
            .then((data) => {
                assert(print.pt(data) == print.pt(shoppers), "does not return a table")
            })
    })
})