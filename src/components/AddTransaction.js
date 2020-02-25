import React from "react";

export const AddTransaction = () => {
  return (
    <>
      <h3>Ajouter une nouvelle transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Texte</label>
          <input type="text" id="text" placeholder="Entrer un texte..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
          Montant <br />
            (négatif - dépenses, positif - revenus)
          </label>
          <input type="number" id="amount" placeholder="Entrer le montant..." />
        </div>
        <button className="btn">Ajouter une transaction</button>
      </form>
    </>
  );
};
