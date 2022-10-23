const BasketItem = ({ id, name, price, quontity, removeFromBasket,incQuontity,decQuontity }) => {
  return (
    <li className="collection-item">{name} <i className="material-icons basket-quontity" onClick={()=> decQuontity(id)}>remove</i> x {quontity} <i className="material-icons basket-quontity" onClick={()=> incQuontity(id)}>add</i> = {price * quontity} руб
      <span
      className="secondary-content"
      onClick={() => removeFromBasket(id)}
      ><i className="material-icons">close</i></span>
    </li>
  )
}
export default BasketItem;