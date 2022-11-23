import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>Rp {total.toLocaleString()}</h1>
    </>
  );
};

export default Balance;
