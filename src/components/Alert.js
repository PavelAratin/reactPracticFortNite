import React, { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context";

const Alert = () => {
  const { alertName: name = '', closeAlert } = useContext(ShopContext);
  //всплывающая подсказка
  //пример применения функции очистки
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)
    return () => {
      clearTimeout(timerId)
    }
  }, [name, closeAlert]);
  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  )
}

export default Alert;