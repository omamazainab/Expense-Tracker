import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";
import "../assets/styles/TransactionHistory.css";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(globalContext);

  return (
    <div>
      <div
        className="transaction-history-container"
        data-toggle="collapse"
        role="button"
        aria-expanded="false"
        aria-controls="collapseHistory"
        href="#collapseHistory"
      >
        <p className="Trans-history-title"> Transaction History</p>
      </div>
      <div id="collapseHistory" className="collapseHistory collapse">
        <ul className="historylist">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={
                transaction.amount < 0
                  ? "historylist-item minus"
                  : "historylist-item plus"
              }
            >
              <span className="trans-des">{transaction.text} | {transaction.amount}</span>
              <button
                className="del-btn"
                onClick={() => {
                  deleteTransaction(transaction.id);
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
