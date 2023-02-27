import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";
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
  const dispatch = useDispatch();

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
                src={data.attributes.img.data.attributes.url}
                alt=""
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={data.attributes.img2.data.attributes.url}
                alt=""
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className={styles.mainImg}>
              <img
                src={data.attributes[selectedImg].data.attributes.url}
                alt=""
              />
            </div>
          </div>

          <div className={styles.right}>
            <h1>{data.attributes.title}</h1>
            <span className={styles.price}>${data.attributes.price}</span>
            <p>{data.attributes.desc}</p>
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

            <button
              className={styles.add}
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
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
