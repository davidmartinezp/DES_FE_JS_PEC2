class Transaction {
    constructor({ text, amount }) {
      this.id = this.generateID();
      this.text = text;
      this.amount = amount;
    }
  
    generateID() {
      return Math.floor(Math.random() * 100000000);
    }
  }
  
  class ExpenseModel {
    constructor() {
      this.transactions = this.loadTransactions();
    }
  
    loadTransactions() {
      const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
      return localStorageTransactions !== null ? localStorageTransactions : [];
    }
  
    addTransaction(text, amount) {
      const transaction = new Transaction({ text, amount });
      this.transactions.push(transaction);
      return transaction; // Retornamos la transacción agregada
    }
  
    removeTransaction(id) {
      this.transactions = this.transactions.filter(transaction => transaction.id !== id);
      this.updateLocalStorage();
    }

  
    updateLocalStorage() {
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }
  
  }
  

  