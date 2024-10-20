//Task 2: Add Event Listeners for Product Selection

const priceElement = document.getElementById('product-price');
const modelSelector = document.getElementById('model-selector');
const purchaseButton = document.getElementById('purchase-button');

modelSelector.addEventListener('change', function(event) {
    const selectedOption = modelSelector.options[modelSelector.selectedIndex];
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
});

//above code dynamically changes the price when the user selects the model of gaming laptop

//Task 3: Handle Stock Availability

//updating purchase button based on stock availability

const stock = selectedOption.getAttribute('data-stock')
if (stock === 'out') {
    purchaseButton.disabled = true;
} else {
    purchaseButton.disabled = false;
}

//Task 4: Create a Checkout Event

purchaseButton.addEventListener('click', function() {
    const selectedOption = modelSelector.options[modelSelector.selectedIndex];
    const stock = selectedOption.getAttribute('data-stock');

    if (stock === 'in') {
        alert('Thank you for your purchase');
    } else {
        alert('Sorry item is out of stock and can not be purchased');
    }
});