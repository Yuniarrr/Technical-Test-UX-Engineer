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

        if (product.discount != 0) {
            const rp = document.createElement('p');
            rp.textContent = `Rp${product.price}`;
            detailPrice.appendChild(rp);

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

// next & previous buttons
const scrollToNext = document.getElementById('next-product');
const prevButton = document.getElementById('prev-product');

productContainer.addEventListener('scroll', updateNextButtonVisibility);

updateNextButtonVisibility();

scrollToNext.addEventListener('click', () => {
    productContainer.scrollBy({
        left: 30,
        behavior: 'smooth'
    });
});

prevButton.addEventListener('click', () =>
    productContainer.scrollBy({
        left: -30,
        behavior: 'smooth'
    })
);

function updateNextButtonVisibility() {
    const remainingScroll = productContainer.scrollWidth - (productContainer.scrollLeft + productContainer.clientWidth);
    scrollToNext.style.display = remainingScroll > 0 ? 'block' : 'none';
    prevButton.style.display = productContainer.scrollLeft > 0 ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    scrollToNext.style.display = 'block';
})

// hide details footer
const hideButton = document.getElementById('hide-details');
const loremText = document.querySelector('#footer p');
hideButton.addEventListener('click', () => {
    loremText.classList.toggle('hide');
    if (loremText.classList.contains('hide')) {
        hideButton.textContent = 'Show All';
    } else {
        hideButton.textContent = 'Collapse all';
    }
});