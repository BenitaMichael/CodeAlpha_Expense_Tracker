import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


import Transaction from './Transaction';

const Transactions = () => {

  const { transactions } = useContext(GlobalContext)

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('')

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }




  return (
    <div className='transactions'>
        <div className='form'>
        <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} id="form">
                <div className="form-control">
                <label htmlFor="text">Transaction</label>
                <input type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Enter Amount <br />
                    (Negative - Expense, Positive - Income)</label
                >
                <input type="number"
                value={amount}
                onChange={(e) =>setAmount(e.target.value)}
                placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>

      <div className='history'>
        <h3>History</h3>
            <ul id="list" className="list">
              {transactions.map(transaction => (<Transaction key = {transaction.id} transaction ={transaction}/>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default Transactions
