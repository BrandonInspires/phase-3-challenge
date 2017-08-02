const promise = require('bluebird');
const options = {
    // Initialization Options
    promiseLib: promise
};
const pgp = require('pg-promise')(options);

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

const routes = require('../store')



var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;
// or:
var assert = chai.assert;
// or:
var should = chai.should();
// according to your preference of assertion style

describe("Product List Command", () => {
    it('product-list function should return a table of dairy products', () => {
        return productList("dairy")
            .then((data) => {
                assert(data, print.pt(list), "does not return a table")
            })
    })
})
describe("Shopper Order Command", () => {
    it("shopper-order function should return shopper #4's orders", () => {
        return shopperOrders(4).should.eventually.equal(print.pt(orders))
            // .then((data) => {
            //     assert(data == print.pt(orders), "does not return a table")
            // })
    })
})
describe("Real Shoppers Command", () => {
    it('real-shoppers function should return a table of shoppers', () => {
        return realShoppers()
            .then((data) => {
                assert(data == print.pt(shoppers), "does not return a table")
            })
    })
})