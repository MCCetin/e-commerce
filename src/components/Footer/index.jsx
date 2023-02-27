import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={styles.top}>
        <div className={styles.item}>
          <h1>Categories</h1>
          <Link className={styles.link} to="/products/1">
            Women
          </Link>
          <Link className={styles.link} to="/products/1">
            Men
          </Link>
          <Link className={styles.link} to="/products/1">
            Shoes
          </Link>
          <Link className={styles.link} to="/products/1">
            Accessories
          </Link>
          <Link className={styles.link} to="/products/1">
            New Arrivals
          </Link>
        </div>
        <div className={styles.item}>
          <h1>Links</h1>
          <Link className={styles.link} to="/products/1">
            FAQ
          </Link>
          <Link className={styles.link} to="/products/1">
            Pages
          </Link>
          <Link className={styles.link} to="/products/1">
            Stores
          </Link>
          <Link className={styles.link} to="/products/1">
            Compare
          </Link>
          <Link className={styles.link} to="/products/1">
            Cookies
          </Link>
        </div>
        <div className={styles.item}>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
            cumque! Voluptatibus autem fuga mollitia repellendus repellat
            placeat earum aspernatur atque voluptas officiis. Omnis vitae
            ducimus perferendis nostrum magni ea tenetur?
          </p>
        </div>
        <div className={styles.item}>
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            veritatis dolorem labore autem dicta quia ratione aspernatur quo
            deleniti perferendis nemo corporis fugit voluptas ullam ipsum saepe
            repellat, qui eos!
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span className={styles.logo}>BUTICK</span>
          <div className={styles.copyright}>
            <span>© Copyright 2023. All Rights Reserved</span>
          </div>
        </div>
        <div className={styles.right}>
          <img
            className={styles.payment}
            src="../public/img/payment.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
