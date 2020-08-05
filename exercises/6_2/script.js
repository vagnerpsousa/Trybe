const curriculum = document.getElementById('curriculum');
const input = document.getElementsByTagName('input');
const clearForm = document.getElementById('clear-form');
const form = document.getElementById('form');

window.onload = function () {
    const state = document.getElementById('estado');
    const aux = ['AC','AL','AP','AM','BA','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO','DF']
    for(let i = 0; i < aux.length; i += 1) {
        let option = document.createElement('option');
        option.value = aux[i];
        option.innerHTML = aux[i];
        state.appendChild(option);
    }
    new window.JustValidate('.js-form', {
        rules: {
          email: {
            required: true,
            email: true
          },
        },
        messages: {
          email: {
              required: 'O campo email é obrigatório',
              email: 'O email digitado não é válido'
           },
        },
    
        submitHandler: function (form, values) {
            console.log(form,values);
        },
    });
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const startDate = new Pikaday({ field: document.getElementById('data-inicio') });
    const endDate = new Pikaday({ field: document.getElementById('data-termino') });
    const fullName = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const Address = document.getElementById('endereco').value;
    const city = document.getElementById('cidade').value;
    const state = document.getElementById('estado').value;
    const experience = document.getElementById('experiência').value;
    const office = document.getElementById('cargo').value;
    const jobDescription = document.getElementById('descrição-cargo').value;
    let inputs = [fullName, email, cpf, Address, city, state, experience, office, jobDescription, startDate, endDate];
    let h1 = document.createElement('h1');
    h1.className = 'display-4 text-center';
    h1.innerHTML = 'Apresentação';
    curriculum.className = 'container';
    curriculum.appendChild(h1);
    for(let index in inputs) {
        let p = document.createElement('p');
        p.innerHTML = inputs[index];
        curriculum.appendChild(p);
    }
});



