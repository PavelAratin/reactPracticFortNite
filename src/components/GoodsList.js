import GoodsItem from "./GoodsItem";

const GoodsList = ({ goods,addToBasket }) => {
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
            addToBasket={addToBasket}
          ></GoodsItem>
        )
      })}
    </div>
  )
}
export default GoodsList;