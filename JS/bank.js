// Deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(depositField.value);

  // current deposit total
  const depositTotalAmount = document.getElementById("deposit-total");
  const previousDepositTotal = parseFloat(depositTotalAmount.innerText);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // set total to deposit
  depositTotalAmount.innerText = currentDepositTotal;

  // Current Balance total
  const balanceTotalAmount = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalAmount.innerText);
  //   set balance with new deposit
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalAmount.innerText = currentBalanceTotal;

  //   clear input field
  depositField.value = "";
});
