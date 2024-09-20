document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-addMoney-amount');
    const pinNumber = getInputFieldValueById('input-addMoney-pin');
    

    if( pinNumber === 1234){
        const balance = getInputTextValueById('current-balance');
        const newBalance = balance + addMoney;
        document.getElementById('current-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money')
    }
})