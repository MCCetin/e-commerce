import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Card({ item }) {
  const [index, setIndex] = useState(0);
  return (
    <Link className={styles.link} to={`/product/${item.id}`}>
      <div className={styles.card}>
        <div
          className={styles.image}
          onMouseOver={() => {
            setIndex(2);
          }}
          onMouseLeave={() => {
            setIndex(0);
          }}
        >
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              import.meta.env.VITE_APP_UPLOAD_URL +
              item.attributes.img.data.attributes.url
            }
            alt=""
            className={styles.mainImg}
          />
          <img
            src={
              import.meta.env.VITE_APP_UPLOAD_URL +
              item.attributes.img2.data.attributes.url
            }
            alt=""
            className={styles.secondImg}
            style={{ zIndex: `${index}` }}
          />
        </div>

        <h2 className={styles.title}>{item.title}</h2>

        <div className={styles.prices}>
          <h3 className={styles.oldPrice}>
            ${item?.attributes.oldPrice || item?.attributes.price + 15}
          </h3>
          <h3 className={styles.price}>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
