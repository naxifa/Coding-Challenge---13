
// Task 2 - Fetch Products from the API Using Fetch and Promises

const fetchAPI = async function (){
    try{
        const res = await fetch ("https://www.course-api.com/javascript-store-products");
        if (!res.ok) {
            throw new Error("Failed to fetch product data!");
        }

            const data = await res.json();
            displayProducts(data);   // Logs the data for now; you can add display logic here
        } 
    catch (error) {  
        console.log(error); // Only logs error to the console



// Task 4 - Handle Errors Gracefully
    // Display a user-friendly error message on the page
    document.getElementById("product-container").innerHTML = `
        <p">Failed to load products. Please try again later.</p>`;
    }
    };



// Task 3 - Display Product Details Dynamically

const displayProducts = (products) => {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear any existing content

    products.forEach(product => {
        // Destructure necessary product details
        const { company, name: productName } = product.fields;
        const price = (product.fields.price / 100).toFixed(2); // Convert to dollars
        const imgUrl = product.fields.image[0].url;

        // Create HTML structure for each product
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src="${imgUrl}" alt="${productName}">
            <h2>${productName}</h2>
            <p>Company: ${company}</p>
            <p>Price: $${price}</p>
        `;

        // Append product element to the container
        productContainer.appendChild(productElement);
    });
};


fetchAPI();
console.log("Loading products...");









