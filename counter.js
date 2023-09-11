const incomeMeter  = document.getElementById("incomeMeter");
const expenseMeter = document.getElementById("expenseMeter");
const profitLossMeter   = document.getElementById("profitLossMeter");
const transactionAmountInput = document.getElementById("transactionAmountInput");

income = 0;
expense = 0;

function updateMeters(){
    incomeMeter.textContent = income
    expenseMeter.textContent = expense

    let profitLoss = income - expense;
    profitLossMeter.textContent = profitLoss

    if(profitLoss >= 0){
        profitLossMeter.style.color =  "#5cb85c";
    }

    else if (profitLoss < 0){
        profitLossMeter.style.color =  "red";
    }
}

function addIncome(){
    const amount = parseFloat(transactionAmountInput.value);
    if(!isNaN(amount) && amount > 0){
        income = amount
        updateMeters();
        transactionAmountInput.value = "";
    }
}

function addExpense(){
    const amount = parseFloat(transactionAmountInput.value);
    if(!isNaN(amount) && amount > 0){
        expense = amount
        updateMeters();
        transactionAmountInput.value = "";
    }
}

function reset(){
    income = 0;
    expense = 0;
    updateMeters();
}























//const incomeMeter = document.getElementById('incomeMeter');
// const expenseMeter = document.getElementById('expenseMeter');
// const profitLossMeter = document.getElementById('profitLossMeter');
// const transactionAmountInput = document.getElementById('transactionAmount');

// let income = 0;
// let expense = 0;

// function updateMeters() {
//     incomeMeter.textContent = '$' + income;
//     expenseMeter.textContent = '$' + expense;
    
//     const profitLoss = income - expense;
//     profitLossMeter.textContent = '$' + profitLoss;
    
//     if (profitLoss >= 0) {
//         profitLossMeter.style.color = "#5cb85c"; // Green for profit
//     } else {
//         profitLossMeter.style.color = "red"; // Red for loss
//     }
// }

// function addIncome() {
//     const amount = parseFloat(transactionAmountInput.value);
    
//     if (!isNaN(amount) && amount > 0) {
//         income += amount;
//         updateMeters();
//         transactionAmountInput.value = '';
//     }
// }

// function addExpense() {
//     const amount = parseFloat(transactionAmountInput.value);
    
//     if (!isNaN(amount) && amount > 0) {
//         expense += amount;
//         updateMeters();
//         transactionAmountInput.value = '';
//     }
// }

// function reset() {
//     income = 0;
//     expense = 0;
//     updateMeters();
// }