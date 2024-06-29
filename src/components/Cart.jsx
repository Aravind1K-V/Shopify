import React, { useEffect } from "react";
import useCartStore from "../zustand/store.js";
import { AiFillDelete } from "react-icons/ai";
import "../styles/cartStyling.scss"

const Cart = () => {
  const {
    cartItems,
    subTotal,
    shipping,
    tax,
    total,
    increment,
    decrement,
    deleteFromCart,
    calculatePrice,
  } = useCartStore();

  useEffect(() => {
    calculatePrice();
  }, [cartItems, calculatePrice]);

  const deleteHandler = (id) => {
    deleteFromCart(id);
    calculatePrice();
  };

  return (
    <div className="cart">
      <main className="flex flex-col items-center">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>

      <aside className="flex flex-col items-center">
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article className="mx-4">
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={qty>1?() => decrement(id) : () => deleteHandler(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
