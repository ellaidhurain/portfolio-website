import React from "react";
import "../index.css";

const Hero = () => {
  return (
    // https://assets.zyrosite.com/marianyp6ig/hero_pic-dOq2GXDaz3tyvBBN.svg
    <div className="hero-div">
      <div className="pb-6">
        {/* <div class="absolute inset-0  backdrop-filter backdrop-blur-md rounded-lg"></div> */}
        <h1 className="hero-h1">
          <span>Infinity Design</span> <br></br>
          <span className="text-green-500">Portfolio.</span>
        </h1>
        <p className="hero-p">
          Lets bring life to your website
        </p>
      </div>
    </div>
  );
};

export default Hero;
