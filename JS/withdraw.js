/* 
1. Add event handler with the withdraw button
2. Get the withdraw amount from the withdraw input field
2-5. Also parse it to a number by default it is string
3. Get previous withdraw total

4. Calculate total withdraw Amount
4-5. Set total withdraw Amount
5. Get the previous Balance total
6. Calculate new Balance total
6-5. Set the new Balance total
7. Clear the input field
*/

// Step 1
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // Step 2
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = parseFloat(withdrawField.value);

  //    Step 3
  const withdrawTotalAmount = document.getElementById("withdraw-total");
  const previousWithdrawTotal = parseFloat(withdrawTotalAmount.innerText);

  //   Step 4
  const currentWithdrawTotal = previousWithdrawTotal + withdrawAmount;
  withdrawTotalAmount.innerText = currentWithdrawTotal;

  //   Step 5
  const BalanceAmount = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(BalanceAmount.innerText);

  //   Step 6
  const newBalanceTotal = previousBalanceTotal - withdrawAmount;
  BalanceAmount.innerText = newBalanceTotal;

  //  Step 7
  withdrawField.value = "";
});
