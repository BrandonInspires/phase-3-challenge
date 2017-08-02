const promise = require('bluebird');
const options = {
	// Initialization Options
	promiseLib: promise
};
const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/grocery_store';
const db = pgp(connectionString);

const productList = function (section) {
	return db.any(`
			SELECT 
				name, price, section 
			FROM 
				grocery_items 
			WHERE 
				section=$1::text
				`, [section])

};

const shopperOrders = function (shopperId) {
	return db.any(`
			SELECT 
				orders.id, orders.total_cost 
			FROM
				orders 
			JOIN 
				shoppers 
			ON 
				shoppers.shopper_id = orders.shopper_id 
			WHERE 
				orders.shopper_id=$1::int
				`, [shopperId])
};
const realShoppers = function () {
	return db.any(`
			SELECT 
				shoppers.shopper_name, 
				COUNT (*) AS "Number of Orders" 
			FROM 
				orders 
			JOIN 
				shoppers 
			ON 
				shoppers.shopper_id = orders.shopper_id 
			GROUP BY 
				orders.shopper_id, shoppers.shopper_name
				`)
}

module.exports = {
	productList,
	shopperOrders,
	realShoppers,
}