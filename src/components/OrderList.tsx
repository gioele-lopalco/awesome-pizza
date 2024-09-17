'use client'

import { ReactElement } from 'react'
import { useOrders } from '../context/OrderContext'
import { IOrderList } from '@/interfaces/IOrderList'

const OrderList = ({ showCompleteButton = false, takeOrder, disableTakeOrder = false }: IOrderList): ReactElement => {
  const { orders } = useOrders()

  return (
    <div className='order-list'>
      <h2>Lista ordini</h2>
      {orders.length > 0 ? (
        <div>
          {orders.map((order) => (
            <div key={order.id} className='list-order-item'>
              <div className='list-order-text'>
                Pizza: {order.pizza}, Extra: {order.extra}, Contatto: {order.contact}
              </div>
              {showCompleteButton && (
                <div className='list-order-button'>
                  <button className='button' onClick={() => takeOrder && !disableTakeOrder ? takeOrder(order) : null} disabled={disableTakeOrder}>
                    Prendi ordine in carico
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Nessun ordine in coda.</p>
      )}
    </div>
  )
}

export default OrderList
