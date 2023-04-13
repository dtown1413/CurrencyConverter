//variables required to identify values in html user inputs
const dollarToPeso = document.querySelector('.usd-php');
const dollarToWon = document.querySelector('.usd-won');
const wonToPeso = document.querySelector('.won-php');
const wonToDollar = document.querySelector('.won-usd');
const pesoToWon = document.querySelector('.php-won');
const pesoToDollar = document.querySelector('.php-usd');
const userCurrency = document.querySelector('.userCurrency');
const submit = document.querySelector('.submit');

// Find user currency type in drop down menu and put in variable
const userCurrencyDropdown = document.getElementById("userCurrencySelector");
const selectedCurrency = userCurrencyDropdown.options[userCurrencyDropdown.selectedIndex].value;

// Find user desired currency conversions based on checkbox selections in an array
let checkedValues = [];
let checkBoxes = document.getElementsByTagName("input");
  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].type === "checkbox" && checkBoxes[i].checked) {
      checkedValues.push(checkBoxes[i].value);
      }
  }

//define the conversion required in an array
let conversionsRequired = [];
  for (let i = 0; i < checkedValues.length; i++) {
    conversionsRequired[i] = selectedCurrency.push(checkedValues[i] + selectedCurrency.value);
}

//break out required conversion calculations

//display value of conversion calculations in p html element at bottom of site
submit.addEventListener('click', function() {
    event.preventDefault();
    let output = document.getElementById("output");
    output.textContent = checkedValues;
});