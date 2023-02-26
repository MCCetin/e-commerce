import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className={styles.cart}>
      {products.length === 0 ? (
        "EMPTY!!!"
      ) : (
        <>
          <h1>Product in your cart</h1>
          {products?.map((item) => (
            <div className={styles.item} key={item.id}>
              <img
                src={import.meta.env.VITE_APP_UPLOAD_URL + item.img}
                alt=""
              />
              <div className={styles.details}>
                <h2>{item.title}</h2>
                <p>{item.title.substring(0, 100)}</p>
                <div className={styles.price}>
                  {item.quantity}x ${item.price}
                </div>
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                className={styles.deleteBtn}
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          ))}

          <div className={styles.total}>
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          <span className={styles.reset} onClick={() => dispatch(resetCart())}>
            Reset Cart
          </span>
        </>
      )}
    </div>
  );
}

export default Cart;
