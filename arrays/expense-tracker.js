const account = {
    name: "Fred Chasin",
    expenses: [],
    income: [],
    addIncome: function (description, amt) {
        this.expenses.push({
            description: description,
            amount: amt
        })
    },
    addExpense: function (description, amt) {
        this.expenses.push({
            description: description,
            amount: amt
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        this.expenses.forEach( expense => {
            totalExpenses+= expense.amt;
        });
        let totalIncome = 0;
        this.income.forEach( income => {
            totalIncome+= income.amt;
        })
        return `${this.name} has $${totalIncome-totalExpenses} net balance in their account.`
    }
};

// 1. add income array to accont

// account.addExpense("coffee", 2);
// account.addExpense("rent", 150);

console.log(account.getAccountSummary());
// expense => description, amt
// addExpense

// getAccountSummary