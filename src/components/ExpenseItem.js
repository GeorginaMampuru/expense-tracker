import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li className="list-group-item">
      {expense.name}
      <span className="badge-primary">R{expense.amount.toFixed(2)}</span>
    </li>
  );
};

export default ExpenseItem;
