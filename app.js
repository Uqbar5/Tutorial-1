const miForm = document.querySelector('#mi-form')
const nameInput = document.querySelector('#firstName')
const lastNameInput = document.querySelector('#lastName')
const generoInput = document.querySelector('#Genero')
const ageInput = document.querySelector('#age')
const userList = document.querySelector('#user')
const msg = document.querySelector('.msg')
const fechaNacimiento = document.querySelector('#fechaNacimiento')

 miForm.addEventListener('submit', onSubmit);

 function onSubmit(e) {
     e.preventDefault();

    if(nameInput.value === '' || lastNameInput.value === '' || generoInput.value === '' || ageInput.value === '' || fechaNacimiento.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Por favor complete toda la información'    
        setTimeout(() => msg.remove(), 4000)
    } else {
        const li = document.createElement('li')
        li.style.backgroundImage = 'url(./Img/Abstract2.jpeg)';
        li.style.padding = '20px'
        li.style.marginRight ='200'
        li.style.listStyle = 'none'
        li.style.fontWeight = 'bolder'
        li.style.marginLeft = '-30'
        li.appendChild(document.createTextNode(`${nameInput.value} 
        ${lastNameInput.value} | ${generoInput.value} | ${ageInput.value} | ${fechaNacimiento.value}`));
        userList.appendChild(li);

    nameInput.value = '';
    lastNameInput.value = '';

    }
 }