// src/components/OrderForm.tsx
'use client';

import { ReactElement, useState } from 'react';
import { useOrders } from '../context/OrderContext';
import { IPizzaOrder } from '@/interfaces/IPizzaOrder';
import { InputLabel } from './InputLabel';


const OrderForm = (): ReactElement => {
  const [order, setOrder] = useState<IPizzaOrder>({ pizza: '', extra: '', contact: '', userId: 1 });
  const [message, setMessage] = useState<string | null>()
  const { addOrder } = useOrders();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setMessage('Ordine avvenuto con successo!') // add popup
    addOrder(order)
    setOrder({ pizza: '', extra: '', contact: '', userId: 1 })
  }

  return (
    <div className='form-container'>
      {message}
      <form onSubmit={handleSubmit} className='order-form'>
        <div className='label-container'>
          <InputLabel textLabel='Tipo di Pizza' inputName='pizza' inputValue={order.pizza} handleChange={handleChange}/>
          <InputLabel textLabel='Extra' inputName='extra' inputValue={order.extra} handleChange={handleChange} isExtra={true}/>
          <InputLabel textLabel='Dettagli di contatto' inputName='contact' inputValue={order.contact} handleChange={handleChange}/>
        </div>
        <button type="submit" className='button'>Ordina</button>
      </form>
    </div>
  )
}

export default OrderForm;
