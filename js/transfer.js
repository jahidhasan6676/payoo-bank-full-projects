document.getElementById('transfer-btn').addEventListener('click', function(event){
    event.preventDefault();
    const transferMoney = getInputFieldValueById('input-transfer-amount');
    const transferPin = getInputFieldValueById('input-transfer-pin');
    

    if(transferPin === 1234){
        const balance = getInputTextValueById('current-balance');
        const newBalance = balance - transferMoney;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('Failed to transfer money')
    }
})