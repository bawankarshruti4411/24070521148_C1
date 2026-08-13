const products = [
    {
        id: 1,
        name: "Nova Laptop",
        price: 55000,
        quantity: 1,
        category: "Electronics",
        icon: "💻",
        description: "Powerful laptop for work and study."
    },
    {
        id: 2,
        name: "Wireless Mouse",
        price: 1200,
        quantity: 1,
        category: "Electronics",
        icon: "🖱️",
        description: "Ergonomic wireless precision mouse."
    },
    {
        id: 3,
        name: "Mechanical Keyboard",
        price: 2500,
        quantity: 1,
        category: "Electronics",
        icon: "⌨️",
        description: "RGB mechanical keyboard."
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 4500,
        quantity: 1,
        category: "Wearables",
        icon: "⌚",
        description: "Track fitness and notifications."
    },
    {
        id: 5,
        name: "Travel Backpack",
        price: 1800,
        quantity: 1,
        category: "Accessories",
        icon: "🎒",
        description: "Durable everyday travel backpack."
    },
    {
        id: 6,
        name: "USB-C Hub",
        price: 2200,
        quantity: 1,
        category: "Electronics",
        icon: "🔌",
        description: "Multi-port USB-C connectivity hub."
    }

];
let cart = [
    {
        id: 1,
        name: "Nova Laptop",
        price: 55000,
        quantity: 1,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Wireless Mouse",
        price: 1200,
        quantity: 2,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Mechanical Keyboard",
        price: 2500,
        quantity: 1,
        category: "Electronics"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 4500,
        quantity: 1,
        category: "Wearables"
    },
    {
        id: 5,
        name: "Travel Backpack",
        price: 1800,
        quantity: 1,
        category: "Accessories"
    }
];
function formatCurrency(value) {
    return value.toLocaleString("en-IN", {
        maximumFractionDigits: 0
    });
}
function displayProducts() {
    const productsGrid =
        document.getElementById("productsGrid");
    productsGrid.innerHTML = "";
    products.forEach(product => {
        productsGrid.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    ${product.icon}
                </div>
                <span class="product-category">
                    ${product.category}
                </span>
                <h3>
                    ${product.name}
                </h3>
                <p class="product-description">
                    ${product.description}
                </p>
                <div class="product-bottom">
                    <span class="product-price">
                        ₹${formatCurrency(product.price)}
                    </span>
                    <button
                        class="add-btn"
                        onclick="addToCart(${product.id})">
                        + Add
                    </button>
                </div>
            </div>
        `;
    });
    document.getElementById("productCount").textContent =
        `${products.length} products`;
}
function addToCart(productId) {
    const product =
        products.find(
            product => product.id === productId
        );
    const existingItem =
        cart.find(
            item => item.id === productId
        );
    if (existingItem) {
        existingItem.quantity++;
        showToast(
            `${product.name} quantity increased`
        );
    }
    else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            category: product.category
        });
        showToast(
            `${product.name} added to cart`
        );
    }
    updateCart();
}
function removeFromCart(productId) {
    const item =
        cart.find(
            item => item.id === productId
        );
    cart = cart.filter(
        item => item.id !== productId
    );
    if (item) {
        showToast(
            `${item.name} removed from cart`
        );
    }
    updateCart();
}
function changeQuantity(productId, change) {
    const item =
        cart.find(
            item => item.id === productId
        );
    if (!item) {
        return;
    }
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    updateCart();
}
function displayCart() {
    const container =
        document.getElementById("cartContainer");
    const emptyCart =
        document.getElementById("emptyCart");
    container.innerHTML = "";
    if (cart.length === 0) {
        emptyCart.style.display = "block";
        return;
    }
    emptyCart.style.display = "none";
    const cartHTML =
        cart.map(item => {
            const product =
                products.find(
                    product => product.id === item.id
                );
            const itemTotal =
                item.price * item.quantity;
            return `
                <div class="cart-item">
                    <div class="cart-item-icon">
                        ${product
                            ? product.icon
                            : "📦"}
                    </div>
                    <div>
                        <h4>
                            ${item.name}
                        </h4>
                        <div class="cart-item-price">
                            ₹${formatCurrency(item.price)}
                        </div>
                        <div class="quantity-control">
                            <button
                                onclick="
                                changeQuantity(
                                    ${item.id},
                                    -1
                                )">
                                −
                            </button>
                            <span class="quantity">
                                ${item.quantity}
                            </span>
                            <button
                                onclick="
                                changeQuantity(
                                    ${item.id},
                                    1
                                )">
                                +
                            </button>
                        </div>
                    </div>
                    <div class="cart-item-total">
                        <strong>
                            ₹${formatCurrency(itemTotal)}
                        </strong>
                        <button
                            class="remove-btn"
                            onclick="
                            removeFromCart(
                                ${item.id}
                            )">
                            Remove
                        </button>
                    </div>
                </div>
            `;
        });
    container.innerHTML =
        cartHTML.join("");
}
function calculateTotals() {
    const itemTotals =
        cart.map(item =>
            item.price * item.quantity
        );
    const subtotal =
        itemTotals.reduce(
            (total, value) =>
                total + value,
            0
        );
    let discountRate = 0;
    if (subtotal > 30000) {
        discountRate = 30;
    }
    else if (subtotal > 20000) {
        discountRate = 20;
    }
    else if (subtotal > 10000) {
        discountRate = 10;
    }
    const totalDiscount =
        subtotal * discountRate / 100;
    const taxableAmount =
        Math.max(
            subtotal - totalDiscount,
            0
        );
    const tax =
        taxableAmount * 0.18;
    const finalTotal =
        taxableAmount + tax;
    const bill = {
        subtotal: subtotal,
        discountRate: discountRate,
        totalDiscount: totalDiscount,
        taxableAmount: taxableAmount,
        tax: tax,
        finalTotal: finalTotal
    };
    return bill;
}
function updateCart() {
    displayCart();
    const bill =
        calculateTotals();
    document.getElementById("subtotal")
        .textContent =
        formatCurrency(
            bill.subtotal
        );
    document.getElementById("discount")
        .textContent =
        formatCurrency(
            bill.totalDiscount
        );
    document.getElementById("tax")
        .textContent =
        formatCurrency(
            bill.tax
        );
    document.getElementById("total")
        .textContent =
        formatCurrency(
            bill.finalTotal
        );
    document.getElementById("savings")
        .textContent =
        formatCurrency(
            bill.totalDiscount
        );
    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );
    document.getElementById("cartCount")
        .textContent =
        totalItems;
    document.getElementById("cartItemsLabel")
        .textContent =
        `${totalItems}
        ${totalItems === 1 ? "item" : "items"}`;
    const discountBox =
        document.getElementById("discountBox");
    if (bill.discountRate > 0) {
        discountBox.innerHTML = `
            <div class="discount-message">
                🎉
                <span>
                    <strong>
                        ${bill.discountRate}%
                        discount applied!
                    </strong>
                    — You saved
                    ₹${formatCurrency(
                        bill.totalDiscount
                    )}
                </span>
            </div>
        `;
    }
    else {
        discountBox.innerHTML = `
            <div class="discount-message fixed">
                💡
                <span>
                    Add more items to unlock
                    a discount.
                </span>
            </div>
        `;
    }
}
function checkout() {
    if (cart.length === 0) {
        showToast(
            "Your cart is empty!"
        );
        return;
    }
    const bill =
        calculateTotals();
    showToast(
        `Order total:
        ₹${formatCurrency(
            bill.finalTotal
        )}`
    );
}
function showToast(message) {
    const toast =
        document.getElementById("toast");
    toast.textContent =
        message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
displayProducts();
updateCart();