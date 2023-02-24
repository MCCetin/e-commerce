import React from "react";
import styles from "./styles.module.css";
import Card from "../Card";

function List() {
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
    <div className={styles.list}>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
