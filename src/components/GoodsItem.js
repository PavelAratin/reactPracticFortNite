import { useContext } from "react";
import { ShopContext } from "../context";
const GoodsItem = ({ full_background, name, description, price, id}) => {
  const { addToBasket } = useContext(ShopContext)
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() => addToBasket({ id, name, price })}
          className="btn"
        >Купить</button>
        <span className="right" style={{ fontSize: '1.8rem' }}>{price}руб</span>
      </div>
    </div>
  )
}

export default GoodsItem;