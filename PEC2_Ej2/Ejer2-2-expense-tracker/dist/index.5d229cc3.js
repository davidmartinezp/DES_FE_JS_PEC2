class ExpenseView {
    constructor(){
    // Aquí se pueden inicializar las variables del DOM y manipulación del DOM
    }
    updateTransactionsView(transactions) {
        const list1 = document.getElementById("list");
        list1.innerHTML = "";
        transactions.forEach(this.displayTransaction);
        this.updateValues(transactions);
    }
    displayTransaction(transaction) {
        const sign = transaction.amount < 0 ? "-" : "+";
        const item = document.createElement("li");
        item.classList.add(transaction.amount < 0 ? "minus" : "plus");
        item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" data-id="${transaction.id}">x</button>
        <button class="edit-btn" data-id="${transaction.id}">e</button>
      `;
        list.appendChild(item);
    }
    updateValues(transactions) {
        const balance = document.getElementById("balance");
        const money_plus = document.getElementById("money-plus");
        const money_minus = document.getElementById("money-minus");
        const amounts = transactions.map((transaction)=>transaction.amount);
        const total = amounts.reduce((acc, item)=>acc += item, 0).toFixed(2);
        const income = amounts.filter((item)=>item > 0).reduce((acc, item)=>acc += item, 0).toFixed(2);
        const expense = (amounts.filter((item)=>item < 0).reduce((acc, item)=>acc += item, 0) * -1).toFixed(2);
        balance.innerText = `$${total}`;
        money_plus.innerText = `$${income}`;
        money_minus.innerText = `$${expense}`;
    }
    setfocusTransaction(transaction) {
        const text = document.getElementById("text");
        const amount = document.getElementById("amount");
        text.value = transaction.text;
        amount.value = transaction.amount;
    }
}

//# sourceMappingURL=index.5d229cc3.js.map
