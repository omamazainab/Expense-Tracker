import React, { useState, useContext } from "react";
import {globalContext} from "../context/GlobalState";
import { idGenerator } from "../utils/idGenerator";
import "../assets/styles/AddTransaction.css";

const AddTransactions = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(globalContext);

  const addIncome = (e) => {
    if (amount <= 0) {
      alert("amount should be greater than 0");
    } else {
      const newTransaction = {
        id: idGenerator,
        text: description,
        amount: +amount,
      };

      addTransaction(newTransaction);
    }
  };

  const addExpense = (e) => {};

  return (
    <form>
      <div className="input-container">
        <h6 className="add-trans-title">Add Transaction</h6>
        <div className="desc-container">
          <input
            type="text"
            placeholder="Description *"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="amount-container">
          <input
            type="number"
            placeholder="Amount *"
            min="0"
            value={amount}
            onChange={(e) => {
              setAmount(Math.abs(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="btn-container">
        <button className="btn income-btn " onClick={addIncome}>Add Income</button>
        <button className="btn expense-btn">Add Expense</button>
      </div>
    </form>
  );
};

export default AddTransactions;
