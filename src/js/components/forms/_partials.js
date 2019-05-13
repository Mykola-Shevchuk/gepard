const sendXHR = function(method, url, data, sendSuccessHandler, sendErrorHandler){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            sendSuccessHandler();
        } else if (this.readyState == 4) {
            sendErrorHandler();
        }
    };
    xhr.open(method, url)
    xhr.send(data)
}

const inputHandler = function(){
    const form = this.closest('form')
    form.classList.remove('is-invalid')
    form.classList.remove('is-error')
    form.classList.remove('is-valid')
}

export {sendXHR, inputHandler}