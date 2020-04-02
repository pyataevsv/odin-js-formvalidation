




const errorLib = {
    zip: {
        valueMissing: 'required',
        patternMismatch: 'ZIP must consist of 6 digits'
    },
    name: {
        valueMissing: 'required'
    },
    email: {
        typeMismatch: 'wrong email',
        valueMissing: 'required'
    },
    pass: {
        valueMissing: 'required',
        patternMismatch: '6+ symbols including digits, upper and lower letters'
    },
    passc: {
        valueMissing: 'required',
        patternMismatch: '6+ symbols including digits, upper and lower letters',
        passwordMismatch: 'password mismatch'
    }
}


const validateField = function (node) {

    const span = node.nextSibling.nextElementSibling;
    const img = document.querySelector(`img.${node.id}`);

    if (node.validity.valueMissing || node.validity.patternMismatch || node.validity.typeMismatch || node.id == 'passc' && passc.value != pass.value) {
        node.classList.remove('valid');
        img.classList.remove('validi');
        node.classList.add('invalid');
        span.classList.add('error');
        if (node.validity.valueMissing) span.innerHTML = errorLib[node.id].valueMissing;
        if (node.validity.patternMismatch) span.innerHTML = errorLib[node.id].patternMismatch;
        if (node.validity.typeMismatch) span.innerHTML = errorLib[node.id].typeMismatch;
        if (node.id == 'passc' && passc.value != pass.value) span.innerHTML = errorLib[node.id].passwordMismatch;
        return false;
    } else {
        node.classList.add('valid');
        span.innerHTML = '';
        img.classList.add('validi')
        return true;
    }

}

const fields = document.querySelectorAll('input');
for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener('focusout', () => {
        validateField(fields[i]);
    })
}


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {

    for (let i = 0; i < fields.length; i++) {
        if (!validateField(fields[i])) {
            e.preventDefault();

        }
    }

})



window.onload = function () {
    document.querySelector('.box-head > img').classList.add('submit');
};