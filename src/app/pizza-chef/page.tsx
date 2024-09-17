'use client'

import { useEffect } from 'react'
import { useOrders } from '../../context/OrderContext'
import OrderList from '../../components/OrderList'

const PizzaChefPage = () => {
  const { fetchOrders, takeOrder, currentOrder, completeOrder } = useOrders()

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  return (
    <div className='page-container'>
      <h1>Orders to manage</h1>
      {currentOrder && (
        <div className='current-order-container'>
          <h2>Order in progress:</h2>
          <div className='list-order-item'>
            <div className='list-order-text'>
              Pizza: {currentOrder.pizza}, Extra: {currentOrder.extra}, Contact: {currentOrder.contact}
            </div>
            <div className='list-order-button'>
              <button className='button' onClick={() => completeOrder()}>Complete order</button>
            </div>
          </div>
        </div>
      )}
      <OrderList
        showCompleteButton={true}
        takeOrder={takeOrder}
        disableTakeOrder={!!currentOrder}
      />
    </div>
  )
}

export default PizzaChefPage
