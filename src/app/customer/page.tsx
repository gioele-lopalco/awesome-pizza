'use client'

import OrderForm from '../../components/OrderForm'
import { useOrders } from '../../context/OrderContext'

const CustomerPage = () => {
  const { currentOrder } = useOrders()

  return (
    <div className='page-container'>
      {currentOrder && (
        <div className='current-order-container'>
          <h3>Ordine preso in carico:</h3>
          <p>Pizza: {currentOrder.pizza},</p>
          <p>Extra: {currentOrder.extra},</p>
          <p>Contact: {currentOrder.contact}</p>
        </div>
      )}
      <h1>Order your pizza</h1>
      <OrderForm />
    </div>
  )
}

export default CustomerPage
