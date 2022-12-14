import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text}{' '}
      <span>
        {sign}Rp {Math.abs(transaction.amount).toLocaleString()}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
