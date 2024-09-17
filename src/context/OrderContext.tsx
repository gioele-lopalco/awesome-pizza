// src/context/OrderContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import { IPizzaOrder } from '../interfaces/IPizzaOrder'
import { IOrderContext } from '../interfaces/IOrderContext'

const OrderContext = createContext<IOrderContext | undefined>(undefined)

export const useOrders = () => {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider')
  }
  return context
}

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<IPizzaOrder[]>([])
  const [currentOrder, setCurrentOrder] = useState<IPizzaOrder | null>(null)
  const [isFetched, setIsFetched] = useState(false)

  const fetchOrders = async () => {
    if (isFetched) return

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
      const data = await response.json();
      const formattedOrders = data.map((item: any) => ({
        id: item.id,
        pizza: `Pizza ${item.id}`,
        extra: `Extra ${item.id}`,
        contact: `Contact ${item.userId}`,
        userId: 1,
      }))
      setOrders(formattedOrders)
      setIsFetched(true)
    } catch (error) {
      console.error('Errore nel fetch degli ordini:', error)
    }
  }

  const addOrder = async (order: IPizzaOrder) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: order.pizza,
          body: order.extra,
          userId: order.userId,
        }),
      })

      const newOrder = await response.json();
      const fullOrder = {
        id: newOrder.id,
        pizza: order.pizza,
        extra: order.extra,
        contact: order.contact,
        userId: order.userId,
      }

      setOrders((prevOrders) => [...prevOrders, fullOrder])
      console.log('Ordini aggiornati:', [...orders, fullOrder])
    } catch (error) {
      console.error('Errore nell\'aggiungere un ordine:', error)
    }
  }

  const removeOrder = (id: number) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id))
  }

  const takeOrder = (order: IPizzaOrder) => {
    setCurrentOrder(order)
    removeOrder(order.id!)
  }

  const completeOrder = () => {
    setCurrentOrder(null)
  }

  useEffect(() => {
    fetchOrders();
  }, [])

  return (
    <OrderContext.Provider value={{ orders, currentOrder, addOrder, fetchOrders, removeOrder, takeOrder, completeOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
