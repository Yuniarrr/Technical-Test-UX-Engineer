// Fetch data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => renderProducts(data))
    .catch(error => console.error('Error fetching data:', error));

// Function to render products
function renderProducts(products) {
    const productContainer = document.getElementById('productContainer');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = '';
        image.srcset = '';

        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = product.name;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `Rp${product.price}`;

        const detailPrice = document.createElement('div');
        detailPrice.classList.add('detail-price');
        const rp = document.createElement('p');
        rp.textContent = 'Rp';
        const disc = document.createElement('p');
        disc.textContent = `disc ${product.discount}%`;

        detailPrice.appendChild(rp);
        detailPrice.appendChild(disc);

        const btnBag = document.createElement('button');
        btnBag.classList.add('btn-bag');
        btnBag.textContent = 'Add to bag';

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(detailPrice);
        card.appendChild(btnBag);

        productContainer.appendChild(card);
    });
}
