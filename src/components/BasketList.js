import BasketItem from "./BasketItem";

const BasketList = ({ order, handleBasketShow, removeFromBasket, incQuontity, decQuontity }) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quontity
  }, 0)
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? order.map(item => (
        <BasketItem
          key={item.id} {...item}
          removeFromBasket={removeFromBasket}
          incQuontity={incQuontity}
          decQuontity={decQuontity}
        ></BasketItem>
      )) : <li className="collection-item">Корзина пуста</li>
      }
      <li className="collection-item active">{totalPrice} руб</li>
      <li className="collection-item">
        <button className="btn">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={() => handleBasketShow()}>close</i>
    </ul>
  )
}

export default BasketList;