
// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
    return totalElement
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const PerviousBalanceAmount = parseFloat(balanceTotalText);
    return PerviousBalanceAmount
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const PerviousBalanceAmount = parseFloat(balanceTotalText);
    const PerviousBalanceAmount = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = PerviousBalanceAmount + amount;

    }
    else {
        balanceTotal.innerText = PerviousBalanceAmount - amount;

    }

}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit button
    /*  const depositInput = document.getElementById('deposit-input');
     const newDepositValue = depositInput.value;
     const newDepositAmount = parseFloat(newDepositValue); */

    // update deposit total
    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousdepositAmount = parseFloat(depositTotalText);
 
     const totalAmount = previousdepositAmount + depositAmount; */
    // depositTotal.innerText = totalAmount;

    // update balance total
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const PerviousBalanceAmount = parseFloat(balanceTotalText);
     balanceTotal.innerText = PerviousBalanceAmount + depositAmount; */
    // update balance
    const depositAmount = getInputValue('deposit-input');

    if (depositAmount > 0) {

        updateTotalField('deposit-total', depositAmount)
        updateBalance(depositAmount, true);
    }


})

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // input button
    /*  const withdrawInput = document.getElementById('withdraw-input');
     const withdrawInputText = withdrawInput.value;
     const newWithdrawAmount = parseFloat(withdrawInputText); */


    // update withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawAmount + withdrawAmount; */

    // update balance total
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const PerviousBalanceAmount = parseFloat(balanceTotalText);
     balanceTotal.innerText = PerviousBalanceAmount - withdrawAmount; */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {

        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false)
    }

    // withdrawInput.value = '';
})
