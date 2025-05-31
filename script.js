const products = [
    {
        id:1,
        name:"iphone 15-pro",
        price:999,
        category:"phones",
        image:"https://via.placeholder.com/300x200/3bef6/white?text=iPhone+15+Pro",
        description:"The latest iPhone with amazing camera and performance"
    },
    {
        id:2,
        name:"MacBook Air",
        price:1199,
        category:"laptops",
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
const featuredProducts = document.getElementById('featured-poducts');

// Step 4: Utility function to format prices
// This will make a price look like "R99 instead of "999"
function formatPrices(price) {
    return "R" + price.tofixed(2); 
}

console.log('JavaScript Loads succesfully!');
console.log('We have',products.length,'products');  

function createProductsCard(products): {
    return`
    <div class="product-card"> 
        <img src="${prodcut.image}"alt="${prodct.name}"class="product-images">
            <div class="product-info">
            <h3 class="product -title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-action">
                <button class="btn btn-primary btn-small" onclick="addToCart(${product})">
                Add To Cart
            </button>
             <div class="product-action">
                <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                View Details
            </button>               
            </div>
        </div>
    </div> `
}
 
function displayProducts(productsToShow:=products){
    if (productsGrid) {
        const productsHTML= productsToShow.map(createProductsCard).join('');
        productsGrid.innerHTML= productsHTML;
    }
} 
 
 if(featuredProducts){
    const featuredHTML = productsToShow.slice(0,3).map(createProductsCard).join();
    featuredProducts.innerHTML=featuredHTML;
 }

 function addToCart(productId) {
    alert('Product ${productId} added to cart');
  
 }

function viewProduct(productId) {
    const product= products.find(prod  => .prod id=== productId);
    alert('Product: '+ product.name + 
    '\nPrice:' + formatPrice(product.price) +
    '\nDescription:'+ product.description);   
}

document.addEventlistener('DOMContentLoaded',function()) {
    console.log('page loaded,display Products....');
    displayProducts(products);
    
}
//function to handle filter button clicks
function setupFilters(){
    const=document.querySelectorAll('.filter-btn');
    
    filterbuttons.forEach(element => {
        button.addEventlistener('click',function9()){
     // Rmove active from all buttons   
    filterbuttons.forEach(btn => btn.classlist.remove('active'))};
     // Add active class to the clicked button
     this.classlist.add('active');
     //Get the category from the buttons data-category attribute
     const category = this.gettAttribute('data-category');
     
     //filter products based on category
     let filteredProduct;
     if(category  ==='all'){
        filteredProduct=products
     }else{
        featuredProducts = products.filter(product: => product.category ===category)
     }
      displayProducts(filteredProducts);
      
      console.log('Showing',filteredProducts.length,'product in category');

    });
}

document.addEventlistener('DOMContentLoaded',function()) {
    console.log('page loaded,display Products....');
    displayProducts(products);
    setupFilters();
}
    

