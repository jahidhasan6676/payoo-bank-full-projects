document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = getInputFieldValueById('input-mobile-number');
    const pinPassword = getInputFieldValueById('input-pin-number');
    
    
    if(mobileNumber === 18 && pinPassword === 1234){
       window.location.href = 'home.html';
    }
    else{
        alert('wrong number and pin');
    }
})