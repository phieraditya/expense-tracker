import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);
  const expense = Math.abs(
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, expense) => (acc += expense), 0)
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+Rp {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-Rp {expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
