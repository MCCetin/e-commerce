import React from "react";
import styles from "./styles.module.css";
import Card from "../Card";

function FeaturedProducts({ type }) {
  const data = [
    {
      id: 0,
      img: "https://picsum.photos/200/300?random=1",
      img2: "https://picsum.photos/200/300?random=2",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://picsum.photos/200/300?random=3",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300?random=4",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300?random=5",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className={styles.featuredProducts}>
      <div className={styles.top}>
        <h1>{(type + " Products").toUpperCase()} </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          maiores quaerat rerum iure esse mollitia obcaecati vel accusamus
          veritatis eveniet? Sapiente ipsam doloremque temporibus saepe
          obcaecati ducimus, similique aliquid eveniet.
        </p>
      </div>
      <div className={styles.bottom}>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
