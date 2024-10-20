//Task 2: Add Event Listeners for Product Selection

const priceElement = document.getElementById('product-price');
const modelSelector = document.getElementById('model-selector');

modelSelector.addEventListener('change', function(event) {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
});

//above code dynamically changes the price when the user selects the model of gaming laptop