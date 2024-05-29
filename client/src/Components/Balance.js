import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../numberFormat'

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  
  // TOTAL
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // CREDITS
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // DEBITS
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className='balance'>
      <div>
        <h4>Your Balance</h4>
        <h1 id="balance">₦{numberWithCommas(total)}</h1>
      </div>

      <div>
        <h4>Total credit</h4>
        <h1 id="credit">₦{numberWithCommas(income)}</h1>
      </div>

      <div>
        <h4>Total Debit</h4>
        <h1 id="debit">₦{numberWithCommas(expense)}</h1>
      </div>
    </div>
  );
};

export default Balance;
