import React from "react";

export const TransactionList = () => {
  return (
    <>
      <h3>Historique</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-400&euro;</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
