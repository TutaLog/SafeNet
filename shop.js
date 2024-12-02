document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');


    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const products = data.products;

      
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                productCard.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p><strong>Prezzo: €${product.price.toFixed(2)}</strong></p>
                    <button class="purchase-btn" onclick="alert('Acquista ${product.name} su PayPal!')">Acquista</button>
                `;

                productList.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Errore nel caricamento dei prodotti:', error);
            productList.innerHTML = '<p>Impossibile caricare i prodotti al momento.</p>';
        });
});
