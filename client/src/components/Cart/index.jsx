import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const data = [
    {
      id: 1,
      img: "https://picsum.photos/200/300?random=5",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300?random=6",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className={styles.cart}>
      <h1>Product in your cart</h1>
      {data?.map((item) => (
        <div className={styles.item} key={item.id}>
          <img src={item.img} alt="" />
          <div className={styles.details}>
            <h2>{item.title}</h2>
            <p>{item.title.substring(0, 100)}</p>
            <div className={styles.price}>1 x ${item.price}</div>
          </div>
          <FontAwesomeIcon icon={faTrash} className={styles.deleteBtn} />
        </div>
      ))}

      <div className={styles.total}>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className={styles.reset}>Reset Cart</span>
    </div>
  );
}

export default Cart;
