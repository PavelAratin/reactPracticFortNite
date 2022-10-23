
const Cart = ({ quontity, handleBasketShow }) => {
  const clickHandler = () => {
    handleBasketShow()
  }
  return (
    <div className="cart blue darken-4 white-text" onClick={clickHandler}>
      <i className="material-icons">local_grocery_store</i>
      {quontity ? <span className="cart-quontity">{quontity}</span> : null}
    </div>
  )
}

export default Cart;