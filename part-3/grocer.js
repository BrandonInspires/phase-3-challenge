const shoppingCart = function () {
        let obj = {}, items = [];

        obj.AddItem = (itemName, price) => {
            let item = {};
            item.name = itemName;
            item.price = price;
            items.push(item)
        };

        obj.GetAllItems = () => {
            document.getElementById("cartList").innerHTML = `<h2>CART<span onclick="document.getElementById('id01').style.display='none' " style="text-align:right;" id="close">&times;</span></h2> `
            items.forEach(function myFunction(item) {
                document.getElementById("cartList").innerHTML += `<li>${item.name} : <span class="item_price"> $${item.price}</span></li>`;
            })
            // document.getElementById("cartList").innerHTML = items.map((item) => `<li>${item.name} : ${item.price}</li>`) ;
            
        };

        obj.CalculateTotal = () => {
            let total = 0;
            items.map((item) => {
                 total = total + (item.price);
            }) 
            return total.toFixed(2);
        };

        obj.ClearCart = () => {
             this.items = [];
        };
        obj.updateTotal = () => {
    document.getElementById("totalPrice").innerHTML = `<p><button onclick="cart.ClearCart()">Clear</button> Total $${cart.CalculateTotal()}</p>`;
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



