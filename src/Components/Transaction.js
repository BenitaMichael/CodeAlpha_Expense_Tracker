import React, { useContext } from 'react'
import deleteButton from '../delete.png'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext);

    const operator = transaction.amount < 0 ? '-' : '+'

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{operator}₦{Math.abs(transaction.amount)}</span><button 
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
        >X</button>
    </li>
  )
}

export default Transaction