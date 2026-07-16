// Using var
var customerName = prompt("Enter Your Name");

// Using let
let productName = prompt("Enter Product Name");
let price = Number(prompt("Enter Price Per Product"));
let quantity = Number(prompt("Enter Quantity"));

// Using const
const GST_RATE = 0.18;

// Calculations
let subtotal = price * quantity;
let gst = subtotal * GST_RATE;
let total = subtotal + gst;

// Create Object
const receipt = {
    customerName,
    productName,
    price,
    quantity,
    subtotal,
    gst,
    total
};

// Object Destructuring
const {
    customerName: cname,
    productName: pname,
    price: pprice,
    quantity: qty,
    subtotal: sub,
    gst: gstAmount,
    total: grandTotal
} = receipt;

// Display Receipt using Template Literals
document.getElementById("bill").innerHTML = `

<div class="row">
<span>Customer</span>
<span>${cname}</span>
</div>

<div class="row">
<span>Product</span>
<span>${pname}</span>
</div>

<div class="row">
<span>Price</span>
<span>₹${pprice.toFixed(2)}</span>
</div>

<div class="row">
<span>Quantity</span>
<span>${qty}</span>
</div>

<hr>

<div class="row">
<span>Subtotal</span>
<span>₹${sub.toFixed(2)}</span>
</div>

<div class="row">
<span>GST (18%)</span>
<span>₹${gstAmount.toFixed(2)}</span>
</div>

<hr>

<div class="total">
<span>TOTAL</span>
<span>₹${grandTotal.toFixed(2)}</span>
</div>

`;