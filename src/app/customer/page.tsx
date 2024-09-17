'use client'

import OrderForm from '../../components/OrderForm'
import { useOrders } from '../../context/OrderContext'

const CustomerPage = () => {
  const { currentOrder } = useOrders()

  return (
    <div className='page-container'>
      <h1>Order your pizza</h1>
      <OrderForm />
      {currentOrder && (
        <div className='current-order-container'>
          <h3>Ordine preso in carico:</h3>
          <p>Pizza: {currentOrder.pizza},</p>
          <p>Extra: {currentOrder.extra},</p>
          <p>Contact: {currentOrder.contact}</p>
        </div>
      )}
    </div>
  )
}

export default CustomerPage
