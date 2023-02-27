import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import styles from "./styles.module.css";

function Products() {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}`
  );

  function handeleChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  }

  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Categories</h2>
          {data.map((item) => (
            <div className={styles.inputItem} key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handeleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
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
          <List
            categoryId={categoryId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
        <div className={styles.list}></div>
      </div>
    </div>
  );
}

export default Products;
