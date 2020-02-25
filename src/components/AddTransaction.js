import React, {useState} from "react";

export const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Ajouter une nouvelle transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Texte</label>
          <input type="text" id="text" value={text} onChange={e=> setText(e.target.value)} placeholder="Entrer un texte..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
          Montant <br />
            (négatif - dépenses, positif - revenus)
          </label>
          <input type="number" id="amount" value={amount} onChange={e=> setAmount(e.target.value)} placeholder="Entrer le montant..." />
        </div>
        <button className="btn">Ajouter une transaction</button>
      </form>
    </>
  );
};
