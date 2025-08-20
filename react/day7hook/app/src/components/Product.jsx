import React from "react";

const Product = ({item}) => {
  return (
    <div>
      <p>{item.title}</p>
      <img height={"200px"} src={item.image} alt="" />
    </div>
  );
};

export default Product;
