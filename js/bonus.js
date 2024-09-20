document.getElementById('bonus-btn').addEventListener('click', function(event){
    event.preventDefault();
    const bonusCoupon = getInputFieldValueById('input-bonus-coupon');
    
    if(bonusCoupon === 1000){
        const balance = getInputTextValueById('current-balance');
        const newBalance = balance + bonusCoupon;
        document.getElementById('current-balance').innerText = newBalance;

    }
    else{
        alert('wrong coupon')
    }
})