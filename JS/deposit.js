/* 
This code was created my be at the first time without function now I have learned the better way which I will implement above
 */

/* // step 1: get the button
document.getElementById("deposit-btn").addEventListener("click", function () {
  // step 2: get deposit input value
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(depositField.value);

  // clear input field
  depositField.value = "";

  // step 3: get current deposit value
  const depositAmountElement = document.getElementById("deposit-total");
  const previousDepositTotal = parseFloat(depositAmountElement.innerText);

  // step 4: sum current and previous balance
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  // step 5: set to deposit field
  depositAmountElement.innerText = currentDepositTotal;

  // ---------------------
  // step 1. get current balance
  const balanceAmountElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceAmountElement.innerText);

  // step 2. sum deposit to current balance
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  // step 3. set the balance
  balanceAmountElement.innerText = newBalanceTotal;
}); */
