import { useContext } from "react";
import { ShopContext } from "../context";
const Cart = () => {
  const { order, handleBasketShow } = useContext(ShopContext)
  const quontity = order.length;

  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">local_grocery_store</i>
      {quontity ? <span className="cart-quontity">{quontity}</span> : null}
    </div>
  )
}

export default Cart;