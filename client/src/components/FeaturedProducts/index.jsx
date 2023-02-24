import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Card from "../Card";
import axios from "axios";

function FeaturedProducts({ type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/products`,
          {
            headers: {
              Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
            },
          }
        );
        setData(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
