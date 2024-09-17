// src/app/pizza-chef/page.tsx
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
      <h1>Lista ordini da gestire</h1>
      <OrderList
        showCompleteButton={true}
        takeOrder={takeOrder}
        disableTakeOrder={!!currentOrder}
      />
      {currentOrder && (
        <div className="current-order-container">
          <h2>Ordine in carico:</h2>
          <div className='list-order-item'>
            <div className='list-order-text'>
              Pizza: {currentOrder.pizza}, Extra: {currentOrder.extra}, Contatto: {currentOrder.contact}
            </div>
            <div className='list-order-button'>
              <button className='button' onClick={() => completeOrder()}>Completa ordine</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PizzaChefPage;
