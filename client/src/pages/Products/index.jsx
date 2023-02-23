import React from "react";
import styles from "./styles.module.css";

function Products() {
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
          <input type="range" />
          <span>1000</span>
        </div>
        <div className={styles.filterItem}>
          <h2>Sort By</h2>
          <div className={styles.inputItem}>
            <input type="radio" name="price" id="asc" value="asc" />
            <label htmlFor="asc">Price (Lower First)</label>
          </div>
          <div className={styles.inputItem}>
            <input type="radio" name="price" id="desc" value="desc" />
            <label htmlFor="desc">Price (Higher First)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.image}>
          <img
            className="catImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div className={styles.list}></div>
      </div>
    </div>
  );
}

export default Products;
