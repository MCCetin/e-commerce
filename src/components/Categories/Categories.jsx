import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Categories() {

  return (
    <div className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.row}>
            <img
              src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link className={styles.link} to="/products/1">
                Sale
              </Link>
            </button>
          </div>
          <div className={styles.row}>
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/6" className={styles.link}>
                Women
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.row}>
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/2" className={styles.link}>
                New Season
              </Link>
            </button>
          </div>
        </div>
        <div className={`${styles.col} ${styles.lg}`}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.row}>
                {" "}
                <img
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <Link to="/products/5" className={styles.link}>
                    Men
                  </Link>
                </button>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.row}>
                <img
                  src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <Link to="/products/3" className={styles.link}>
                    Accessories
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <img
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link to="/products/4" className={styles.link}>
                Shoes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
