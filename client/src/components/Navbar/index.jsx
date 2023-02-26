import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

function Navbar() {
  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);
  
  return (
    <nav>
      <div className="wrapper">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.item}>
              <img src="../public/img/en.png" alt="" />
              <FontAwesomeIcon
                className={styles.arrowdown}
                icon={faChevronDown}
              />
            </div>

            <div className={styles.item}>
              <span>USD</span>
              <FontAwesomeIcon
                className={styles.arrowdown}
                icon={faChevronDown}
              />
            </div>

            <div className={styles.item}>
              <Link className={styles.link} to="/products/2">
                Men
              </Link>
            </div>

            <div className={styles.item}>
              <Link className={styles.link} to="/products/1">
                Women
              </Link>
            </div>

            <div className={styles.item}>
              <Link className={styles.link} to="/products/6">
                Children
              </Link>
            </div>

            <div className={styles.item}>
              <Link className={styles.link} to="/products/5">
                Accessories
              </Link>
            </div>
          </div>

          <div className={styles.center}>
            <div className="logo">
              <Link className={styles.link} to="/">
                BUTICK
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.item}>
              <Link className={styles.link} to="/">
                Homepage
              </Link>
            </div>
            <div className={styles.item}>
              <Link className={styles.link} to="/">
                About
              </Link>
            </div>
            <div className={styles.item}>
              <Link className={styles.link} to="/">
                Contact
              </Link>
            </div>
            <div className={styles.item}>
              <Link className={styles.link} to="/">
                Stores
              </Link>
            </div>

            <div className={styles.icons}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faHeart} />
              <div className="cart" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={styles.cartIcon}
                />
                {products.length !== 0 && (
                  <span className={styles.quantity}>{products.length}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </nav>
  );
}

export default Navbar;
