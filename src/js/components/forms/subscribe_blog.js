import {sendXHR, inputHandler} from './_partials';

if (document.body.contains(document.querySelector('.js-form_subscribe_blog'))) {
  const form = document.querySelector('.js-form_subscribe_blog');
  const emailNode = form.querySelector('input[type=email]');
  const url = form.action;
  const method = form.method;

  const sendSuccessHandler = function () {
    form.classList.add('is-valid');
    form.classList.remove('is-toched');
  };

  const sendErrorHandler = function () {
    form.classList.add('is-error')
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();

    const isEmailValid = emailNode.checkValidity();

    if (!isEmailValid) {
      form.classList.add('is-invalid');
      if (emailNode.value.trim().length) {
        form.classList.add('is-touched')
      }
    } else {
      const data = new FormData(form);
      sendXHR(method, url, data, sendSuccessHandler, sendErrorHandler);
    }
  };

  form.addEventListener('submit', formSubmitHandler);

  emailNode.addEventListener('input', inputHandler);
}

