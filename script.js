const products = [
    {
        id:1,
        name:"iphone 15-pro",
        price:999,
        category:"phone",
        image:"https://via.placeholder.com/300x200/3bef6/white?text=iPhone+15+Pro",
        description:"The latest iPhone with amazing camera and performance"
    },
    {
        id:2,
        name:"MacBook Air",
        price:1199,
        category:"laptop",
        image:"https://via.placeholder.com/300x200/3bef6/white?text=MacBook+Air",
        description:"Lightweight laptop prefect for work and creativity"
    },
    {
        id:3,
        name:"AirPods Pro",
        price:249,
        category:"accessories",
        image:"https://via.placeholder.com/300x200/3bef6/white?text=AirPods+Pro",
        description:"Wireless earbuds with noise cancellation"
    },
    {
        id:4,
        name:"Sumsang Galaxy S24",
        price:899,
        category:"phones",
        image:"https://via.placeholder.com/300x200/3bef6/white?text=Glaxy+S24",
        description:"Android phone with incredible feature"
    },
    {
        id:5,
        name:"Dell Laptop",
        price:799,
        category:"Laptop",
        image:"https://via.placeholder.com/300x200/3bef6/white?text=Dell+Laptop",
        description:"Reliable laptop for everyday computing" 
    },
    {
        id:6,
        name:"Wireless Mouse",
        price:49,
        category:"acessories",
        image:"https://via.placeholder.com/300x200/3bef6/white?text=Wieless+Mouse",
        description:"Ergonomic wireless mouse for productivity" 
    },
];

// step 2: Creating out shopping cart.
// This will store all items the customer whats to buy

let cart = [];  

//step 3: Get refrence to HTML elements
//This connects or JS to specicfic parts of our  webpage

const cartCountElement = document.getElementById('cart-count');  
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getAnimations('featured-prpoducts');

// Step 4: Utility function to format prices
// This will make a price look like "R99 instead of "999"
function formatPrices(price) {
    return "R" + price.tofixed(2) 
}

console.log('JavaScript Loads succesfully');
console.log('We have',products.length,'products.')