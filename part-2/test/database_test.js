const promise = require('bluebird');
const options = {
    // Initialization Options
    promiseLib: promise
};
const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/grocery_store';
// const db =  pgp(connectionString);

const {
    productList,
    shopperOrders,
    realShoppers
} = require('../database')

let {
    list,
    orders,
    shoppers
} = require('./data')
const print = require('node-print');



const assert = require('chai').assert;

describe("Product List Function", () => {
    it('product-list function should return a table of dairy products', () => {
        return productList("dairy")
            .then((data) => {
                assert(data, print.pt(list), "does not return a table")
            })
    })
})
describe("Shopper Order Function", () => {
    it("shopper-order function should return shopper #4's orders", () => {
        return shopperOrders(4)
            .then((data) => {
                assert(data, print.pt(orders), "does not return a table")
            })
    })
})
describe("Real Shoppers Function", () => {
    it('real-shoppers function should return a table of shoppers', () => {
        return realShoppers()
            .then((data) => {
                assert(data, print.pt(shoppers), "does not return a table")
            })
    })
})