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

        // transaction history

        const div = document.createElement('div');
        div.classList.add('bg-orange-300')
        div.innerHTML = `
        <h3 class="text-lg font-bold">Cash Out History</h3>
        <p>${cashOut} Withdraw. new Balance: ${newBalance}
        `;
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to cash out')
    }
})