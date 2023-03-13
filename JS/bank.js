// Deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(depositField.value);
  console.log(typeof newDepositAmount);

  // current deposit total
  const depositTotalAmount = document.getElementById("deposit-total");
  const previousDepositTotal = parseFloat(depositTotalAmount.innerText);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalAmount.innerText = currentDepositTotal;

  //   clear input field
  depositField.value = "";
});
