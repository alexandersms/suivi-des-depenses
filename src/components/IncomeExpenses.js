import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Revenus</h4>
          <p id="money-plus" className="money plus">+0.00&euro;</p>
        </div>
        <div>
          <h4>Dépenses</h4>
          <p id="money-minus" className="money minus">-0.00&euro;</p>
        </div>
      </div>
    )
}
