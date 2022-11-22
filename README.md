# Expense Tracker

A full-stack expense tracker app builds in the front-end with React using hooks (useState, useContext, useReducer) and the Context API, and in the back-end with Node.js and Express API.

## File and Folder Structure

```
.
└── client/
    └── src/
        ├── context/
        │   ├── GlobalState.js
        │   └── AppReducer.js
        ├── components/
        │   ├── Header.js
        │   ├── Balance.js
        │   ├── IncomeExpenses.js
        │   ├── TransactionList.js
        │   ├── AddTransaction.js
        │   └── Transaction.js
        ├── App.css
        ├── App.js
        └── index.js
└── config/
    └── db.js
└── controllers/
    └── transactions.js
└── models/
    └── Transaction.js
└── routes/
    └── transactions.js
└── server.js
```
