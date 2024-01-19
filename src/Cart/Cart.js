import React from 'react'
import { useGlobalContext } from './CartContext'

// components
import CartNavbar from './CartNavbar'
import CartContainer from './CartContainer'
// items

function Cart() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <CartNavbar />
      <CartContainer />
    </main>
  )
}

export default Cart