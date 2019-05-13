const invalidPopups = document.querySelectorAll('.js-popup_invalid');
const errorPopups = document.querySelectorAll('.js-popup_error');
const successPopups = document.querySelectorAll('.js-popup_success');

invalidPopups.forEach((popup) =>
    popup.addEventListener('click', function(){
        this.closest('form').classList.remove('is-invalid');
    })
);
errorPopups.forEach((popup) =>
    popup.addEventListener('click', function(){
        this.closest('form').classList.remove('is-error');
    })
);
successPopups.forEach((popup) =>
    popup.addEventListener('click', function(){
        this.closest('form').classList.remove('is-valid');
    })
);