const scriptURL = 'https://script.google.com/macros/s/AKfycbw14rAxgvmfIMXuvWkYW_LNvzcC1r_r_PrvY3kAzMuj5HSyRhHT-MqUaQdro91nbba4/exec';
const form = document.forms['kontak-saya'];

const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const Myalert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault();


    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            Myalert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
});