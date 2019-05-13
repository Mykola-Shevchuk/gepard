import {sendXHR, inputHandler} from './_partials';

const form = document.querySelector('.js-form_contactus') ||
             document.querySelector('.js-form_contactusExt');
const checkboxNodes = form.querySelectorAll('input[type=checkbox]');
const emailNode = form.querySelector('input[type=email]');
const url = form.action;
const method = form.method;

const isInterestsValid = function(){
    return [...checkboxNodes].some( checkbox => checkbox.checked)
}
const interestsValue = () => ([...checkboxNodes]).filter( (checkbox) => checkbox.checked ).map(checkbox => checkbox.value)

const sendSuccessHandler = function() {
    form.classList.add('is-valid')
    form.classList.remove('is-toched')
}
const sendErrorHandler = function() {
    form.classList.add('is-error')
}

const formSubmitHandler = function(e){
    e.preventDefault();
    
    const isEmailValid = emailNode.checkValidity();
    
    if (!isInterestsValid() || !isEmailValid) {
        form.classList.add('is-invalid')
        if (emailNode.value.trim().length) {
            form.classList.add('is-touched')
        }
    } else {
        const data = new FormData(form);
        data.set('interests', interestsValue());
        sendXHR(method, url, data, sendSuccessHandler, sendErrorHandler);
    }
}

form.addEventListener('submit', formSubmitHandler)

emailNode.addEventListener('input', inputHandler)
checkboxNodes.forEach(checkbox => checkbox.addEventListener('input', inputHandler));