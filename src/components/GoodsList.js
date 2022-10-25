import GoodsItem from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../context";

const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);
  if (!goods.length) {
    return <h3>Ничего не загрузилось</h3>
  }
  return (
    <div className="goods">
      {goods.map((good) => {
        return (
          <GoodsItem
            key={good.id}
            id={good.id}
            name={good.name}
            price={good.price}
            description={good.description}
            full_background={good.full_background}
          ></GoodsItem>
        )
      })}
    </div>
  )
}
export default GoodsList;