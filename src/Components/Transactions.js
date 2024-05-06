import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transactions = () => {

  const context = useContext(GlobalContext)

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('')



  return (
    <div className='transactions'>
        <div className='form'>
        <h3>Add new transaction</h3>
            <form id="form">
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
                <li className="minus">
                Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
        </ul>
      </div>
    </div>
  )
}

export default Transactions
