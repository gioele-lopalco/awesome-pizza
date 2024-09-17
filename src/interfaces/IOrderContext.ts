import { IPizzaOrder } from './IPizzaOrder'

export interface IOrderContext {
  orders: IPizzaOrder[]
  currentOrder: IPizzaOrder | null
  addOrder: (order: IPizzaOrder) => void
  fetchOrders: () => void
  removeOrder: (id: number) => void
  takeOrder: (order: IPizzaOrder) => void
  completeOrder: () => void
}
