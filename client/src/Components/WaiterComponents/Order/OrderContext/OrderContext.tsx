import { createContext } from "react";

const OrderContext = createContext({
  food: [],
  setFood: () => {}
});

export default OrderContext;
