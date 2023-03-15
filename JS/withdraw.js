/* 
This code was created my be at the first time without function now I have learned the better way which I will implement above
 */

/* 
// 1. Add event handler with the withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // 2. Get the withdraw amount from the withdraw input field
  const withdrawField = document.getElementById("withdraw-field");

  // 2-5. Also parse it to a number by default it is string
  const withdrawAmount = parseFloat(withdrawField.value);

  // 3. Get previous withdraw total
  const withdrawAmountElement = document.getElementById("withdraw-total");
  const previousWithdrawTotal = parseFloat(withdrawAmountElement.innerText);

  // 4. Calculate total withdraw Amount
  const totalWithdraw = previousWithdrawTotal + withdrawAmount;

  // 4-5. Set total withdraw Amount
  withdrawAmountElement.innerText = totalWithdraw;

  // 5. Get the previous Balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  // 6. Calculate new Balance total
  const currentBalanceTotal = previousBalanceTotal - withdrawAmount;

  // 6-5. Set the new Balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // clear
  withdrawField.value = "";
}); */
