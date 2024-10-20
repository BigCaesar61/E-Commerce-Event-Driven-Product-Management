//Task 2: Add Event Listeners for Product Selection

const priceElement = document.getElementById('product-price');
const modelSelector = document.getElementById('model-selector');
const purchaseButton = document.getElementById('purchase-button');

modelSelector.addEventListener('change', function(event) {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
});

//above code dynamically changes the price when the user selects the model of gaming laptop

//Task 3: Handle Stock Availability

const stockStatus = {
    1100: 'in',
    1500: 'out',
    2000: 'in'
};

//updating purchase button based on stock availability

const stock = selectedOption.getAttribute('data-stock')
if (stock === 'out') {
    purchaseButton.disabled = true;
} else {
    purchaseButton.disabled = false;
}