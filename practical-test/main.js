fetch('data.json')
    .then(response => response.json())
    .then(data => renderProducts(data))
    .catch(error => console.error('Error fetching data:', error));

const productContainer = document.getElementById('product-container');

function renderProducts(products) {
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
        image.srcset = '';

        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = product.name;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `Rp${product.price - (product.price * product.discount / 100)}`;

        const detailPrice = document.createElement('div');
        detailPrice.classList.add('detail-price');

        const rp = document.createElement('p');
        rp.textContent = `Rp${product.price}`;
        detailPrice.appendChild(rp);

        if (product.discount != 0) {
            const disc = document.createElement('p');
            disc.textContent = `${product.discount}%`;
            detailPrice.appendChild(disc);
        }


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

// scroll to top
const scrollToTop = document.getElementById('top-btn');
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// scroll to next product item 30px
const scrollToNext = document.getElementById('next-product');
scrollToNext.addEventListener('click', () => {
    productContainer.scrollBy({
        left: 30,
        behavior: 'smooth'
    });
});

// scroll to prev product item 30px
const scrollToPrev = document.getElementById('prev-product');
scrollToPrev.addEventListener('click', () => {
    productContainer.scrollBy({
        left: -30,
        behavior: 'smooth'
    });
});

// hide details footer
const hideButton = document.getElementById('hide-details');
const loremText = document.querySelector('#footer p');
hideButton.addEventListener('click', () => {
    loremText.classList.toggle('hide');
    if (loremText.classList.contains('hide')) {
        hideButton.textContent = 'Show details';
        loremText.style.display = 'none';
    } else {
        hideButton.textContent = 'Hide details';
        loremText.style.display = 'block';
    }
});