'use client'

import { ReactElement, useState } from 'react'
import { useOrders } from '../context/OrderContext'
import { IPizzaOrder } from '@/interfaces/IPizzaOrder'
import { InputLabel } from './InputLabel'
import { openNotification } from '@/utils/Notification'
import { notification } from 'antd'

const OrderForm = (): ReactElement => {
  const [order, setOrder] = useState<IPizzaOrder>({ pizza: '', extra: '', contact: '', userId: 1 })
  const { addOrder } = useOrders()
  const [api, contextHolder] = notification.useNotification()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setOrder((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await addOrder(order)
      openNotification(api)
    } catch (error) {
      console.error('Errore durante l\'ordine:', error)
    }
    setOrder({ pizza: '', extra: '', contact: '', userId: 1 })
  }

  return (
    <div className='form-container'>
      {contextHolder}
      <form onSubmit={handleSubmit} className='order-form'>
        <div className='label-container'>
          <InputLabel
            textLabel='Pizza Type'
            inputName='pizza'
            inputValue={order.pizza}
            handleChange={handleChange}
          />
          <InputLabel
            textLabel='Extra'
            inputName='extra'
            inputValue={order.extra}
            handleChange={handleChange}
            isExtra={true} />
          <InputLabel
            textLabel='Contact Details'
            inputName='contact'
            inputValue={order.contact}
            handleChange={handleChange}
          />
        </div>
        <button type="submit" className='button'>Order</button>
      </form>
    </div>
  )
}

export default OrderForm
