import React from "react";
import Slider from "../../components/Slider";
import FeaturedProducts from "../../components/FeaturedProducts";

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured" />
      <FeaturedProducts type="Trending" />
    </div>
  );
}

export default Home;
