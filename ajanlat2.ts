const vd = document.querySelectorAll('.contact-container .contactForm .inputBox .ovoda');
const trmk = document.querySelector('.contact-container .contactForm .inputBox .termek');
const sjt = document.querySelector('.contact-container .contactForm .inputBox .sajat');
const radios = document.querySelector('')

document.getElementById('ovoda').addEventListener('click', function() {
    document.getElementById('egyebselect').style.display = 'block';
    document.getElementById('ovodaiselect').style.display = 'none';
});

document.getElementById('termek').addEventListener('click', function() {
    document.getElementById('egyebselect').style.display = 'none';
    document.getElementById('ovodaiselect').style.display = 'block';
});