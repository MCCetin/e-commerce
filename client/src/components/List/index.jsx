import React from "react";
import styles from "./styles.module.css";
import Card from "../Card";
import useFetch from "../../hooks/useFetch";

function List({ categoryId, sort, subCats, maxPrice }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className={styles.list}>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
