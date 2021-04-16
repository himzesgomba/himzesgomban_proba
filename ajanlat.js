const opovodai = document.querySelector('.contact-container .contactForm .inputBox .opovodai');
const option = document.querySelector(' .contact-container .contactForm .inputBox .option');
const ovoda = document.querySelectorAll('.contact-container .contactForm .inputBox .ovoda');
const termek = document.querySelector('.contact-container .contactForm .inputBox .termek');
const sajat = document.querySelector('.contact-container .contactForm .inputBox .sajat');


ovoda.addEventListener('click', function() {
    const opct = '0';
    option.style.opacity = opct;

});


-- -

function opChange() {
    const opt = '0';
    option.style.opacity = opt;
    const ovodaback = '1';
    opovodai.style.opacity = ovodaback;
}

function backChange() {
    const back = '1';
    option.style.opacity = back;
}

function ovodaOpChange() {
    const ovodaopt = '0';
    opovodai.style.opacity = ovodaopt;
}

function ovodaBackChange() {
    const ovodaback = '1';
    opovodai.style.opacity = ovodaback;
}

ovoda.addEventListener('click', opChange, ovodaBackChange);

termek.addEventListener('click', backChange, ovodaOpChange);

--

ovoda.addEventListener('click', function() {
    document.getElementById('egyebselect').style.display = 'block';
    document.getElementById('ovodaiselect').style.dispaly = 'none';
});

termek.addEventListener('click', function() {
    document.getElementById('egyebselect').style.display = 'none';
    document.getElementById('ovodaiselect').style.dispaly = 'block';
});

sajat.addEventListener('click', function() {
    document.getElementById('egyebselect').style.display = 'none';
    document.getElementById('ovodaiselect').style.dispaly = 'block';
});