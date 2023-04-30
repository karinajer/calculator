let calculationResult = '';

function calculation(calculatorValue) {
  calculationResult += calculatorValue;
  showCalculation();
}

function showCalculation() {
  document.querySelector('.js-result').innerHTML = calculationResult;
}