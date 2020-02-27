import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Revenus</h4>
        <p id="money-plus" className="money plus">
          {income}&euro;
        </p>
      </div>
      <div>
        <h4>Dépenses</h4>
        <p id="money-minus" className="money minus">
          {expense}&euro;
        </p>
      </div>
    </div>
  );
};
