import React from 'react'
import Balance from './Balance'

const Header = () => {
  return (
    <div className='header'>
      <h1>Expense Tracker</h1>
      <hr />
      <p>Built by Bunnie.tech</p>

      <Balance />
    </div>
  )
}

export default Header
