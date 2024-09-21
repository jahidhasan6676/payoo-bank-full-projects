// login section
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getInputTextValueById(id){
    const inputText = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputText);
    return inputNumber;
}

function getShowFormById(id){
    const addMoney = document.getElementById('add-money-form').classList.add('hidden');
    const cashOut = document.getElementById('cash-out-form').classList.add('hidden');
    const latestPayment = document.getElementById('latest-payment').classList.add('hidden');
    const transferMoney = document.getElementById('transfer-form').classList.add('hidden');
    const bonusCoupon = document.getElementById('bonus-money-form').classList.add('hidden');
    const payBill = document.getElementById('pay-bill-form').classList.add('hidden');
    const transaction = document.getElementById('transaction-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden');
}