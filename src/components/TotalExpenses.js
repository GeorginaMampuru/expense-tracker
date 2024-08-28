import React from 'react';

const TotalExpenses = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="alert alert-info">
      Total Expenses: R {total.toFixed(2)}
    </div>
  );
};

export default TotalExpenses;
