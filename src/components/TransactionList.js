import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Historique</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={Transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </>
  );
};
