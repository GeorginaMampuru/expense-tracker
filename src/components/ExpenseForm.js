import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      const newExpense = { id: uuidv4(), name, amount: parseFloat(amount) };
      addExpense(newExpense);
      setName('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="text-center mb-4">
        <img src="/logo.png" alt="Expense" className="img-fluid" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Expense Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
           placeholder="Enter Expense Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
           placeholder="Enter amount"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
