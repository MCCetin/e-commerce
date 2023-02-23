import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGoogle,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <span>BE IN TOUCH WITH US:</span>
        <div className={styles.mail}>
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
