import { IPizzaOrder } from "./IPizzaOrder";

export interface IOrderList {
  showCompleteButton?: boolean;
  takeOrder?: (order: IPizzaOrder) => void
  disableTakeOrder?: boolean;
}