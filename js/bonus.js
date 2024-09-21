document.getElementById('bonus-btn').addEventListener('click', function(event){
    event.preventDefault();
    const bonusCoupon = getInputFieldValueById('input-bonus-coupon');
     
   const code = 76;
    const bonus = 100;
    const bonusNumber = parseFloat(bonus);
    
    if(bonusCoupon === code){
        const balance = getInputTextValueById('current-balance');
        const newBalance = balance + bonusNumber;
        document.getElementById('current-balance').innerText = newBalance;

    }
    else{
        alert('wrong coupon')
    }
})