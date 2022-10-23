import React, { useState, useEffect } from 'react';
import '../App.css';
import GoodsList from './GoodsList';
import Preloader from './Preloader';
import BasketList from './BasketList';
import Cart from './Cart';
import Alert from './Alert';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  //стейт массива для корзины
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('');

  //функция добавления товара в козину(item) приходит по клику на кнопку(сами передаем ему необходимые данные через обьект)
  const addToBasket = (item) => {
    //Если в стейте корзины нет товара id которого равен id карточки товара
    //то создаем новый обьект парсим item и добавляем новое свойство
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quontity: 1
      }
      //новый обьект сливаем с со стейтом массива корзины
      setOrder([...order, newItem])
    } else {
      //Если в стейте корзины есть товар id которого равен id карточки товара
      //то просто увеличиваем поле quontity на 1
      const newOrder = order.map((orderItem, index) => {
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
      setOrder(newOrder)
    }
    setAlertName(item.name)
  }

  //удаление товара из корзины
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.id !== itemId)
    setOrder(newOrder)
  }
  //функция увеличения товара в корзине
  const incQuontity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuontity = el.quontity + 1
        return {
          ...el,
          quontity: newQuontity
        }
      } else {
        return el;
      }
    });
    setOrder(newOrder)
  }
  //функция уменьшения товара в корзине
  const decQuontity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuontity = el.quontity - 1
        return {
          ...el,
          quontity: newQuontity >= 0 ? newQuontity : 0
        }
      } else {
        return el;
      }
    });
    setOrder(newOrder)
  }

  //функция для алерта , если товар добавлен в корзину
  const closeAlert = () => {
    setAlertName('');
  }

  //функция показа корзины
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }
  useEffect(function getGoods() {
    //специальная задержка для прелоадера
    setTimeout(() => {
      fetch("https://fortniteapi.io/v1/shop?lang=ru", {
        headers: {
          'Authorization': 'f266a02c-efd105c7-c5624229-17f5c9d0'
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setGoods(data.featured)
          setLoading(false)
        })
    }, 2000)
  }, [])
  return <main className="container content">
    <Cart
      quontity={order.length}
      handleBasketShow={handleBasketShow}
    ></Cart>
    {loading ? <Preloader></Preloader> : <GoodsList goods={goods} addToBasket={addToBasket}></GoodsList>}
    {isBasketShow && <BasketList
      order={order}
      handleBasketShow={handleBasketShow}
      removeFromBasket={removeFromBasket}
      incQuontity={incQuontity}
      decQuontity={decQuontity}
    ></BasketList>}
    {alertName && <Alert name={alertName} closeAlert={closeAlert}></Alert>}
  </main>
}
export default Shop;