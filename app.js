
const dollarToPeso = document.querySelector('.usd-php');
const dollarToWon = document.querySelector('.usd-won');
const wonToPeso = document.querySelector('.won-php');
const wonToDollar = document.querySelector('.won-usd');
const pesoToWon = document.querySelector('.php-won');
const pesoToDollar = document.querySelector('.php-usd');
const userCurrency = document.querySelector('.userCurrency');
const submit = document.querySelector('.submit');

let dollarValue;
let userValue;
let solution;

function convDollarToPeso() {
    let dollarValue = parseFloat(dollarToPeso.value);
    let userValue = parseFloat(userCurrency.value);
    solution = dollarValue * userValue;
};

submit.addEventListener('click', function() {
    event.preventDefault();
    convDollarToPeso();
    let output = document.getElementById("output");
    output.textContent = "The result is " + solution;
});
