function Product(title, image , price, description) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.description = description;
}


async function fetchAndCreateProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        
        const products = data.slice(0, 20).map((item) => {
            return new Product(
                item.title,
                item.image,
                item.price,
                item.description,
                
            );
        });

        renderProducts(products);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function renderProducts(products) {
    const main = document.getElementById('product-container');
    products.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        card.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
       
        `;

        main.appendChild(card);
    });
}


fetchAndCreateProducts();







  