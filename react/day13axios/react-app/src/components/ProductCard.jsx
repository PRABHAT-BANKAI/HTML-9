import React from "react";

const ProductCard = ({
  title,
  price,
  image,
  description = "no description",
}) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>Title:{title}</h2>
      <img className="h-[100px]" src={image} alt="" />
      <p>Price:{price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default ProductCard;
