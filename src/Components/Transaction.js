import React from 'react'

const Transaction = ({ transaction }) => {

    const operator = transaction.amount < 0 ? '-' : '+'

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{operator}₦{Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
    </li>
  )
}

export default Transaction