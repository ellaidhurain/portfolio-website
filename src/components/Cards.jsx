import React from "react";
import { images, imageLinks } from "../utilities/images";

const Cards = () => {
  return (
    <>
      <div className="card-div">
        {images.map((image, index) => (
          <a href={imageLinks[index]?.link} key={index}>
            <div className="card">
              <img src={image.src} alt={image.alt} />
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Cards;
