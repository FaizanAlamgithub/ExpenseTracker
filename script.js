let totalSalaryInput = document.getElementById('totalSalary');
let balanceInput = document.getElementById('balance');
let expenseCategoryInput = document.getElementById('expenseCategory');
let expenseAmountInput = document.getElementById('expenseAmount');
let expensesList = document.getElementById('expenses');
let balance = 0;

function calculateBalance() {
    let totalSalary = parseFloat(totalSalaryInput.value);
    balance = totalSalary - calculateTotalExpenses();
    balanceInput.value = balance.toFixed(2);
}

function calculateTotalExpenses() {
    let totalExpenses = 0;
    let expenseItems = expensesList.getElementsByTagName('li');
    for (let i = 0; i < expenseItems.length; i++) {
        totalExpenses += parseFloat(expenseItems[i].getAttribute('data-amount'));
    }
    return totalExpenses;
}

function addExpense() {
    let category = expenseCategoryInput.value.trim();
    let amount = parseFloat(expenseAmountInput.value);
    if (category === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter valid category and amount');
        return;
    }
    balance -= amount;
    balanceInput.value = balance.toFixed(2);
    let li = document.createElement('li');
    li.textContent = category + ' - ₹' + amount.toFixed(2);
    li.setAttribute('data-amount', amount);
    expensesList.appendChild(li);
    expenseCategoryInput.value = '';
    expenseAmountInput.value = '';
}
