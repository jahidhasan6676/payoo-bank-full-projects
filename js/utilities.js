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