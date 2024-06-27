document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.toggle-button');
    button.addEventListener('click', function() {
        const elementToToggle = document.querySelector('.element-to-toggle');
        elementToToggle.classList.toggle('active');
    });

    const dataContainer = document.querySelector('.dynamic-data-container');
    const newData = [
        { name: 'Product 1', price: '$10' },
        { name: 'Product 2', price: '$20' },
        { name: 'Product 3', price: '$30' }
    ];

    function renderData(data) {
        dataContainer.innerHTML = '';
        data.forEach(item => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            `;
            dataContainer.appendChild(productElement);
        });
    }

    renderData(newData);

    setInterval(function() {
        const randomData = generateRandomData();
        renderData(randomData);
    }, 5000);

    function generateRandomData() {
        const randomData = [];
        for (let i = 0; i < 3; i++) {
            const randomPrice = '$' + Math.floor(Math.random() * 100) + 1;
            randomData.push({ name: 'Random Product ' + (i + 1), price: randomPrice });
        }
        return randomData;
    }
});
