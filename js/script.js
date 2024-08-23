const form = document.getElementById('product-form');
const categoryButtons = document.querySelectorAll('#category-buttons button');
const categories = document.querySelectorAll('.category');

// Função para mostrar a categoria selecionada
function showCategory(category) {
    categories.forEach(cat => {
        cat.classList.remove('active');
        if (cat.id === category + '-category') {
            cat.classList.add('active');
        }
    });
}

// Mostrar categoria "Masculino" por padrão
showCategory('Masculino');

// Adiciona o evento de clique aos botões de categoria
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        showCategory(button.getAttribute('data-category'));
    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const quantity = document.getElementById('product-quantity').value;
    const category = document.getElementById('product-category').value;

    const newProduct = document.createElement('li');
    newProduct.classList.add('product-item'); // Adiciona a classe para aplicar os mesmos estilos
    newProduct.innerHTML = `<strong>Nome:</strong> ${name}<br>
                            <strong>Descrição:</strong> ${description}<br>
                            <strong>Preço:</strong> R$ ${parseFloat(price).toFixed(2)}<br>
                            <strong>Quantidade em Estoque:</strong> ${quantity}`;
    newProduct.style.opacity = 0;
    newProduct.style.transform = 'scale(0.9)';

    const productList = document.getElementById(`${category}-products`);
    productList.appendChild(newProduct);

    setTimeout(() => {
        newProduct.style.opacity = 1;
        newProduct.style.transform = 'scale(1)';
    }, 100);

    form.reset();
});