document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    const cardholderName = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const billingAddress = document.getElementById('billing-address').value;

    if (validateForm(cardholderName, cardNumber, expiryDate, cvv, billingAddress)) {
        document.getElementById('payment-message').textContent = 'Payment Processed Successfully!';
        document.getElementById('payment-message').style.color = 'green';
    } else {
        document.getElementById('payment-message').textContent = 'Please fill out all fields correctly.';
    }
});

function validateForm(name, card, expiry, cvv, address) {
    const cardRegex = /^[0-9]{16}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const cvvRegex = /^[0-9]{3}$/;

    if (!name || !address || !cardRegex.test(card) || !expiryRegex.test(expiry) || !cvvRegex.test(cvv)) {
        return false;
    }
    return true;
}
