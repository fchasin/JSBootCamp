let myAccount = {
    name: "Fred",
    expenses: 0,
    income: 0
}

let addExpense = (account, amt) => {
    account.expenses += amt;
}

let addIncome = (account, amt) => {
    account.income += amt;
}

let getAccountSummary = (account) => {
    let balance = account.income - account.expenses;
    return `${account.name}'s account has $${account.expenses} in expenses and $${account["income"]} in income, and a balance of $${balance}}`;
}

let resetAccount = (account) => {
    account.expenses = 0;
    account.income = 0;
}

addIncome(myAccount, 10);
addExpense(myAccount, 50)
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));