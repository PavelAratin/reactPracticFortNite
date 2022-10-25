export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: ''
      }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id)
      }
    case 'ADD_TO_BASKET':
      const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id)
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quontity: 1
        }
        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quontity: orderItem.quontity + 1
            }
            //поле else обязательно иначе все ломается
          } else {
            return orderItem;
          }
        })
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name
      }
    case 'INCREMENT_QUONTITY':
      return {
        ...state,
        order: state.order.map(el => {
          if (el.id === payload.id) {
            const newQuontity = el.quontity + 1
            return {
              ...el,
              quontity: newQuontity
            }
          } else {
            return el;
          }
        })
      }
    case 'DECREMENT_QUONTITY':
      return {
        ...state,
        order: state.order.map(el => {
          if (el.id === payload.id) {
            const newQuontity = el.quontity - 1
            return {
              ...el,
              quontity: newQuontity >= 0 ? newQuontity : 0
            }
          } else {
            return el;
          }
        })
      }
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow
      }
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false
      }
    default:
      return state;
  }
}