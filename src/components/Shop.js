import React, { useEffect, useContext } from 'react';
import '../App.css';
import GoodsList from './GoodsList';
import Preloader from './Preloader';
import BasketList from './BasketList';
import Cart from './Cart';
import Alert from './Alert';
import { ShopContext } from '../context';

const Shop = () => {
  const {loading, order, isBasketShow, alertName, setGoods } = useContext(ShopContext)
  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v1/shop?lang=ru", {
      headers: {
        'Authorization': 'f266a02c-efd105c7-c5624229-17f5c9d0'
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setGoods(data.featured)
      })
  }, [])
  return <main className="container content">
    <Cart
      quontity={order.length}
    ></Cart>
    {loading ? <Preloader></Preloader> : <GoodsList></GoodsList>}
    {isBasketShow && <BasketList></BasketList>}
    {alertName && <Alert></Alert>}
  </main>
}
export default Shop;