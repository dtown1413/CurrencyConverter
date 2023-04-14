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
  const body = document.querySelector('.body')

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

  //html element text append
  function appendText(text) {
    const newText = document.createTextNode(text);
    return newText;
  }

  //break out required conversion calculations
  function convertUSDPHP() {
    let value = userCurrency.value * dollarToPeso.value;
    const element = document.createElement("p");
    body.appendChild(element);
    element.textContent = "Your USD to PHP value is: " + value;
  }

  function convertUSDWON() {
    let value = userCurrency.value * dollarToWon.value;
    const element = document.createElement("p");
    body.appendChild(element);
    element.textContent = "Your USD to WON value is: " + value;

  }

  function convertWONPHP() {
    let value = userCurrency.value * wonToPeso.value;
    const element = document.createElement("p");
    body.appendChild(element);
    element.textContent = "Your WON to PHP value is: " + value;
  }

  function convertWONUSD() {
    let value = userCurrency.value * wonToDollar.value;
    const element = document.createElement("p");
    body.appendChild(element);
    element.textContent = "Your WON to USD value is: " + value;
  }

  function convertPHPWON() {
    let value = userCurrency.value * pesoToWon.value;
    const element = document.createElement("p");
    body.appendChild(element);
    element.textContent = "Your PHP to WON value is: " + value;
  }

  function convertPHPUSD() {
    let value = userCurrency.value * pesoToDollar.value;
    const element = document.createElement("p");
    body.appendChild(element);
    element.textContent = "Your PHP to USD value is: " + value;
  }

  //scan getConversionsRequired() and execute the proper conversion function
  function conversionScan() {
    const conversions = getConversionsRequired();
    let output = document.getElementById("output");
    for (let i = 0; i < conversions.length; i++) {
      if (conversions[i] === "usdphp") {
        convertUSDPHP();
      } else if (conversions[i] === "usdwon") {
        convertUSDWON();
      } else if (conversions[i] === "wonusd") {
        convertWONUSD();
      } else if (conversions[i] === "wonphp") {
        convertWONPHP();
      } else if (conversions[i] === "phpusd") {
        convertPHPUSD();
      } else if (conversions[i] === "phpwon") {
        convertPHPWON();
      } else if (conversions[i] === "usdusd") {
        const elementUSDUSD = document.createElement("p");
        body.appendChild(elementUSDUSD);
        elementUSDUSD.textContent = "Your USD value is:" + userCurrency.value;
      } else if (conversions[i] === "phpphp") {
        const elementPHPPHP = document.createElement("p");
        body.appendChild(elementPHPPHP);
        elementPHPPHP.textContent = "Your PHP value is:" + userCurrency.value;
      } else if (conversions[i] === "wonwon") {
        const elementWONWON = document.createElement("p");
        body.appendChild(elementWONWON);
        elementWONWON.textContent = "Your WON value is:" + userCurrency.value;
      } if (conversions[i] === "") {
        const elementEmpty = document.createElement("p");
        body.appendChild(elementEmpty);
        elementEmpty.textContent = "Please make a selection.";
      }
    }
  }

  //display value of conversion calculations in p html element at bottom of site
  submit.addEventListener('click', function () {
    event.preventDefault();
    let submitOutput = document.getElementById("output");
    submitOutput.textContent = conversionScan();
  }
  );
});