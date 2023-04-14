document.addEventListener("DOMContentLoaded", function () {
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
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
        checkedValues.push(checkboxes[i].value);
      }
    }
    return checkedValues;
  }

  //define the conversion required in an array
  function getConversionsRequired() {
    let conversionsRequired = [];
    const checkedValues = getCheckedValues();
    for (let i = 0; i < checkedValues.length; i++) {
      let conversion = selectedCurrency + checkedValues[i];
      conversionsRequired.push(conversion);
    }
    return conversionsRequired;
  }
  //break out required conversion calculations
  function convertUsdToPhp() {
    let value = userCurrency.value * dollarToPeso.value;
    return value;
  }

  function convertUsdToWon() {
    let value = userCurrency.value * dollarToWon.value;
    return value;
  }

  function convertWonToPhp() {
    let value = userCurrency.value * wonToPeso.value;
    return value;
  }

  function convertWonToUsd() {
    let value = userCurrency.value * wonToDollar.value;
    return value;
  }

  function convertPhpToWon() {
    let value = userCurrency.value * pesoToWon.value;
    return value;
  }

  function convertPhpToDollar() {
    let value = userCurrency.value * pesoToDollar.value;
    return value;
  }

  //html element text append
  function appendText(text) {
    const newText = document.createTextNode(text);
    return newText;
  }

  //function to create break in text
  function createBreak() {
    return document.createElement("br");
  }

  //scan getConversionsRequired() and execute the proper conversion function
  function conversionScan() {
    const conversions = getConversionsRequired();
    let output = document.getElementById("output");
    for (let i = 0; i < conversions.length; i++) {

      if (conversions.includes("usdphp")) {

        let convertDollartoPeso = convertUsdToPhp();
        output.appendChild(appendText("Your USD to PHP value is: " + convertDollartoPeso));
        output.appendChild(createBreak());

      } else if (conversions.includes("usdwon")) {

        let convertDollartoWon = convertUsdToWon().value;
        output.appendChild(appendText("Your USD to WON value is: " + convertDollartoWon));
        output.appendChild(createBreak());

      } if (conversions.includes("")) {

        // still need to define rule for empty result
        
      }
    }
    return conversions;
  }

  //display value of conversion calculations in p html element at bottom of site
  submit.addEventListener('click', function () {
    event.preventDefault();
    let submitOutput = document.getElementById("output");
    submitOutput.textContent = conversionScan();
  }
  );
});