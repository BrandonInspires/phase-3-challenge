const shoppingCart = function () {
        let obj = {}, items = [];

        obj.AddItem = (itemName, price) => {
            let item = {};
            item.name = itemName;
            item.price = price;
            items.push(item)
        };

        obj.GetAllItems = () => {
            document.getElementById("cartList").innerHTML = ``;
            if (items.length !== 0) {
            items.forEach(function myFunction(item) {
                document.getElementById("cartList").innerHTML += `<li>${item.name} : <span style="margin-right: 12px;"> $${item.price}</span></li>`;
            })
            // document.getElementById("cartList").innerHTML = items.map((item) => `<li>${item.name} : ${item.price}</li>`) 
            } else {
                document.getElementById("cartList").innerHTML = `Your Cart Is Empty`;

            }
        };

        obj.CalculateTotal = () => {
            let total = 0;
            items.map((item) => {
                 total = total + (item.price);
            }) 
            return total.toFixed(2);
        };

        obj.ClearCart = () => {
             document.getElementById("cartList").innerHTML = `Your Cart Is Empty`;
             items = [];
            document.getElementById("cart-item-count").innerHTML = `(${items.length})`;
            document.getElementById("totalPrice").innerHTML = `<p class="w3-display-bottomright"> Total $${cart.CalculateTotal()}</p>`;
        };
        obj.updateTotal = () => {
    document.getElementById("totalPrice").innerHTML = `<p class="w3-display-bottomright"> Total $${cart.CalculateTotal()}</p>`;
    document.getElementById("cart-item-count").innerHTML = `(${items.length})`;
};

        return obj;
    };
    const cart = new shoppingCart();

    // tests
    let items = cart.GetAllItems();
    items;
let total = cart.CalculateTotal();
let clear = cart.clearCart();
numOfItems = items.length;



