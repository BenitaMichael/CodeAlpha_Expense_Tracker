import React from 'react'

const Balance = () => {
  return (
    <div className='balance'>
      <div>
        <h4>Your Balance</h4>
        <h1 id="balance">₦0:00</h1>
      </div>

      <div>
        <h4>Total credit</h4>
        <h1 id="credit">₦0:00</h1>
      </div>

      <div>
        <h4>Total Debit</h4>
        <h1 id="debit">₦0:00</h1>
      </div>

    </div>
  )
}

export default Balance
