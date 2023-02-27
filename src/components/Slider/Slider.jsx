import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className={styles.icons}>
        <div className={styles.icon} onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
        </div>
        <div className={styles.icon} onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
