document.addEventListener('DOMContentLoaded', function () {
    const items = [
        { id: 1, name: 'Item 1', price: 10.00 },
        { id: 2, name: 'Item 2', price: 15.00 },
        { id: 3, name: 'Item 3', price: 20.00 }
    ];

    const cart = [];

    const itemList = document.getElementById('item-list');
    const cartItems = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');

    // Populate item list
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="addToCart(${item.id})">Add to Cart</button>`;
        itemList.appendChild(li);
    });

    // Add item to cart
    window.addToCart = function (itemId) {
        const selectedItem = items.find(item => item.id === itemId);
        cart.push(selectedItem);

        // Update cart display
        updateCart();
    };

    // Update cart display
    function updateCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${item.id})">Remove</button>`;
            cartItems.appendChild(li);
            totalPrice += item.price;
        });

        totalSpan.textContent = totalPrice.toFixed(2);
    }

    // Remove item from cart
    window.removeFromCart = function (itemId) {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            // Update cart display
            updateCart();
        }
    };
});
