import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
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
        {error
          ? "Something went wrong"
          : loading
          ? "loading..."
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
