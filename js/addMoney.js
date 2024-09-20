document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-addMoney-amount');
    const pinNumber = getInputFieldValueById('input-addMoney-pin');
    if (isNaN(addMoney)) {
        alert('Please send a number');
        return;
    }

    if (pinNumber === 1234) {
        const balance = getInputTextValueById('current-balance');
        const newBalance = balance + addMoney;
        document.getElementById('current-balance').innerText = newBalance;

        // transaction history
        const p = document.createElement('p');
        p.innerText = `Added ${addMoney}TK. New Balance: ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('Failed to add money')
    }




})

