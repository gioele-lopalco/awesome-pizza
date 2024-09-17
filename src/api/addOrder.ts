'use server'

import { IPizzaOrder } from '../interfaces/IPizzaOrder'

export const addOrder = async (order: IPizzaOrder) => {
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

    const newOrder = await response.json()

    return {
      id: newOrder.id,
      pizza: order.pizza,
      extra: order.extra,
      contact: order.contact,
      userId: order.userId,
    }
  } catch (error) {
    console.error('Error adding an order:', error)
    throw error
  }
}
