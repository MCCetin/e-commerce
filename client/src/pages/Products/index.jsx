import React, { useState } from "react";
import styles from "./styles.module.css";
import List from "../../components/List";
import { useParams } from "react-router-dom";

function Products() {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Categories</h2>
          <div className={styles.inputItem}>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Skirt</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Jean</label>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2>Filter By Price</h2>
          <span>0</span>
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
        <div className={styles.filterItem}>
          <h2>Sort By</h2>
          <div className={styles.inputItem}>
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="asc">Price (Lower First)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="desc">Price (Higher First)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.image}>
          <img
            className={styles.catImg}
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
        </div>
        <div className={styles.list}></div>
      </div>
    </div>
  );
}

export default Products;
