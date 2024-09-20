document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cashOut-amount');
    const cashOutPin = getInputFieldValueById('input-cashOut-pin');

    if(isNaN(cashOut)){
        alert('Please send a number');
        return;}

    if(cashOutPin === 1234){
        const balance = getInputTextValueById('current-balance');
        if(cashOut > balance){
            alert('Amount undefined');
            return;
        }
        const newBalance = balance - cashOut;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out')
    }
})