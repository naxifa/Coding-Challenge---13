
// Task 2 - Fetch Products from the API Using Fetch and Promises

const fetchAPI = async function (){
    try{
        const res = await fetch ("https://www.course-api.com/javascript-store-products");
        if (!res.ok) {
            throw new Error("Failed to fetch product data");
        }

            const data = await res.json();
            displayProducts(data);   // Logs the data for now; you can add display logic here
        } 
    catch (error) {  
        console.log(error); // Only logs error to the console



// Task 4 - Handle Errors

    // user-friendly error message 
    document.getElementById("product-container").innerHTML = `
        <p">Error loading products. Please try again later.</p>`;
    }
    };



// Task 3 - Display Product Details Dynamically

const displayProducts = (products) => {
    const productContainer = document.getElementById("product-container");

    let productHTML = ""; //  empty string to hold the HTML

    products.forEach(product => {
        // Destructure necessary product details
        const { company, name: productName, price, image } = product.fields;
        const productPrice = (price / 100).toFixed(2); // Convert to dollars
        const imgUrl = image[0].url;

        // HTML for each product and add it to the productHTML string
        productHTML += `
            <div class="product">

                <img src="${imgUrl}" alt="${productName}">
                <h2>${productName}</h2>
                <p>Company: ${company}</p>
                <p>Price: $${productPrice}</p>
                
            </div>
        `;
    });

    // Setting the innerHTML of productContainer to the built HTML string
    productContainer.innerHTML = productHTML;
};

// To start the fetch process
fetchAPI();
console.log("Loading products...");









