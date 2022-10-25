
import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();
//массив с сотояниями (вместо сосяний из компонента шоп)
const initialState = {
  goods: [],
  loading: true,
  order: [],
  alertName: '',
}

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState)
  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }
  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } })
  }
  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item })
  }
  value.incQuontity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUONTITY', payload: { id: itemId } })
  }
  value.decQuontity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUONTITY', payload: { id: itemId } })
  }
  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" })
  }
  value.setGoods = (data) => [
    dispatch({ type: 'SET_GOODS', payload: data })
  ]
  return <ShopContext.Provider value={value}>
    {children}
  </ShopContext.Provider>
}