import React from "react";

const Card = ({ title, image, price, description }) => {
  return (
    <div style={{border:"1px solid black", width:"200px"}}>
      <img height={"100px"} src={image} alt="" />
      <p>title: {title}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Card;
