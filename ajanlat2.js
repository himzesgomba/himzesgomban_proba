const opovodai = document.querySelector('.contact-container .contactForm .inputBox .opovodai');
const option = document.querySelector(' .contact-container .contactForm .inputBox .option');
const vd = document.querySelectorAll('.contact-container .contactForm .inputBox .ovoda');
const trmk = document.querySelector('.contact-container .contactForm .inputBox .termek');
const sjt = document.querySelector('.contact-container .contactForm .inputBox .sajat');

vd.addEventListener('click', function() {
    document.getElementById('egyebselect').style.display = 'block';
    document.getElementById('ovodaiselect').style.dispaly = 'none';
});

trmk.addEventListener('click', function() {
    document.getElementById('egyebselect').style.display = 'none';
    document.getElementById('ovodaiselect').style.dispaly = 'block';
});