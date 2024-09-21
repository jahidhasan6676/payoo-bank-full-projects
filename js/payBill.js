 document.getElementById('pay-bill-btn').addEventListener('click', function(event){
    event.preventDefault();
    const payBillMoney = getInputFieldValueById('input-payBill-amount');
    const billPinNumber = getInputFieldValueById('input-payBill-pin');
    if (isNaN(payBillMoney)) {
        alert('Please send a number');
        return;
    }


    if (billPinNumber === 1234) {
        const balance = getInputTextValueById('current-balance');
        const newBalance = balance - payBillMoney;
        document.getElementById('current-balance').innerText = newBalance;

        // transaction history
        
    }
    else {
        alert('Failed to add money')
    }

 })