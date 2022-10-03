import React from 'react';

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* Transaction component */}
        <li className="minus">
          Cash <span>-Rp 400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};

export default TransactionList;
