'use client'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import { IPizzaOrder } from '../interfaces/IPizzaOrder'
import { IOrderContext } from '../interfaces/IOrderContext'
import { fetchOrders as fetchOrdersApi } from '../api/fetchOrders'
import { addOrder as addOrderApi } from '../api/addOrder'
import { removeOrder as removeOrderApi } from '../api/removeOrder'


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
      const fetchedOrders = await fetchOrdersApi()
      setOrders(fetchedOrders)
      setIsFetched(true)
    } catch (error) {
      console.error('Errore nel fetch degli ordini:', error)
    }
  }

  const addOrder = async (order: IPizzaOrder) => {
    try {
      const fullOrder = await addOrderApi(order)
      setOrders((prevOrders) => [...prevOrders, fullOrder])
    } catch (error) {
      console.error('Errore nell\'aggiungere un ordine:', error)
    }
  }

  const removeOrder = async (id: number) => {
    try {
      await removeOrderApi(id)
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id))
    } catch (error) {
      console.error('Errore nella rimozione dell\'ordine:', error)
    }
  }


  const takeOrder = (order: IPizzaOrder) => {
    setCurrentOrder(order)
    setOrders((prevOrders) => prevOrders.filter((prevOrder) => prevOrder.id !== order.id))
  }

  const completeOrder = () => {
    if (currentOrder?.id != null){
      removeOrder(currentOrder.id)
    }
    setCurrentOrder(null)
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return (
    <OrderContext.Provider value={{ orders, currentOrder, addOrder, fetchOrders, removeOrder, takeOrder, completeOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
