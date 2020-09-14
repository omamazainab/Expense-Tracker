import React, { useState, useContext,useEffect } from "react";
import { globalContext } from "../context/GlobalState";
import "../assets/styles/Balance.css";

const Balance = () => {
  const { transactions } = useContext(globalContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let sum = 0;
    transactions.map((transaction) => {
      sum += transaction.amount;
    });
    setBalance(sum);
  }, [transactions]);

  return (
    <div className="text-center">
      <h6 className="heading balance_title">Balance</h6>
      <h3 className="heading balance">${balance}</h3>
    </div>
  );
};

export default Balance;
