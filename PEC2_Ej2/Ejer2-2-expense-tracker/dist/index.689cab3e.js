class ExpenseController {
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.init();
    }
    init() {
        const form = document.getElementById("form");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const text = document.getElementById("text").value.trim();
            const amount = parseFloat(document.getElementById("amount").value.trim());
            if (text === "" || isNaN(amount)) {
                alert("Please add a text and valid amount");
                return;
            }
            const newTransaction = this.model.addTransaction(text, amount);
            this.view.displayTransaction(newTransaction);
            this.view.updateValues(this.model.transactions);
            this.model.updateLocalStorage();
            this.updateDeleteBtns();
            this.updateEditBtns();
            document.getElementById("text").value = "";
            document.getElementById("amount").value = "";
        });
        this.initTrans();
    }
    initTrans() {
        this.view.updateTransactionsView(this.model.transactions);
        this.updateDeleteBtns();
        this.updateEditBtns();
    }
    updateDeleteBtns() {
        const deleteButtons = list.querySelectorAll(".delete-btn");
        deleteButtons.forEach((button)=>{
            button.addEventListener("click", ()=>this.deleteTransaction(button));
        });
    }
    deleteTransaction(button) {
        const transactionId = parseInt(button.getAttribute("data-id"));
        this.model.removeTransaction(transactionId);
        this.initTrans();
    }
    updateEditBtns() {
        const editButtons = list.querySelectorAll(".edit-btn");
        editButtons.forEach((button)=>{
            button.addEventListener("click", ()=>this.editTransaction(button));
        });
    }
    editTransaction(button) {
        const transactionId = parseInt(button.getAttribute("data-id"));
        const transaction = this.model.transactions.find((transaction)=>transaction.id === transactionId);
        console.log(transaction);
        this.model.removeTransaction(transactionId);
        this.initTrans();
        this.view.setfocusTransaction(transaction);
    }
}

//# sourceMappingURL=index.689cab3e.js.map
