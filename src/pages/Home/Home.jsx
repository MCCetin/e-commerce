import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contacts from "../../components/Contacts/Contacts";
import styles from "./styles.module.css";

function Home() {
  return (
    <div>
      <Slider />
      <div className={styles.featuredProducts}>
        <FeaturedProducts type="featured" />
      </div>
      <Categories />
      <div className={styles.featuredProducts}>
        <FeaturedProducts type="trending" />
      </div>
      <Contacts />
    </div>
  );
}

export default Home;
