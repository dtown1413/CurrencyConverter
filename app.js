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
function getCheckedValues() {
    let checkedValues = [];
    let checkboxes = document.getElementsByTagName("input");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
        checkedValues.push(checkboxes[i].value);
      }
    }
    return checkedValues;
  }

//define the conversion required in an array
function getConversionsRequired() {
    let conversionsRequired = [];
    for (var i = 0; i < checkedValues.length; i++) {
        conversionRequired[i] = selectedCurrency + checkedValues[i];
      }
    return conversionsRequired
    }

//break out required conversion calculations

//display value of conversion calculations in p html element at bottom of site
submit.addEventListener('click', function() {
    event.preventDefault();
    convDollarToPeso();
    let output = document.getElementById("output");
    output.textContent = conversionRequired;
});
