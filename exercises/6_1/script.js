const submitForm = document.getElementById('submit-form');
const numData = document.getElementById('data-inicio');
const message = document.getElementById('message');
submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    message.innerHTML = '';
    let value = numData.vale;
    let numbers = value.split('/');
    if(validateDate(numbers)) {
        message.innerHTML = 'Data inválida!';
    } else {
        message.innerHTML = 'Data correta!';
    }
});

function validateDate (numbers) {
    if(numbers[0] <= 0 || numbers[0] > 31) {
        return false;
    } else 
    if(numbers[1] <= 0 || numbers[1] > 12) {
        return false;
    } else 
    if (numbers[2] <= 0) {
        return false;
    } else {
        return true;
    }
}