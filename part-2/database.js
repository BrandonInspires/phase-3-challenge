const pgp = require('pg-promise')()
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)

const productList = function(section) {
		return db.query(`
			SELECT 
				* 
			FROM 
				grocery_items 
			WHERE 
				section=$1::text
				`, 
				[section])
}
const shopperOrders = function(shopperId) {
		return db.query(`
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
				`, 
				[shopperId])
}
const realShoppers = function() {
		return db.query(`
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

