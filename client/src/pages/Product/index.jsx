import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsLeftRightToLine,
  faHeart,
  faCartPlus,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className={styles.product}>
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className={styles.left}>
            <div className={styles.images}>
              <img
                src={
                  import.meta.env.VITE_APP_UPLOAD_URL +
                  data.attributes.img.data.attributes.url
                }
                alt=""
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={
                  import.meta.env.VITE_APP_UPLOAD_URL +
                  data.attributes.img2.data.attributes.url
                }
                alt=""
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className={styles.mainImg}>
              <img
                src={
                  import.meta.env.VITE_APP_UPLOAD_URL +
                  data.attributes[selectedImg].data.attributes.url
                }
                alt=""
              />
            </div>
          </div>

          <div className={styles.right}>
            <h1>Title</h1>
            <span className={styles.price}>$199</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto a sapiente dolore recusandae libero maiores in aut
              mollitia beatae. Odio possimus neque harum explicabo aliquid
              consequatur expedita quia, impedit fugit!
            </p>
            <div className={styles.quantity}>
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>

            <button className={styles.add}>
              <FontAwesomeIcon icon={faCartPlus} />
              ADD TO CART
            </button>

            <div className={styles.links}>
              <div className={styles.item}>
                <FontAwesomeIcon icon={faHeart} />
                ADD TO WHISLIST
              </div>
              <div className={styles.item}>
                <FontAwesomeIcon icon={faBalanceScale} />
                ADD TO BALANCE
              </div>
            </div>

            <div className={styles.info}>
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className={styles.info}>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
