import React from "react";

const Card = ({title,image}) => {
  return (
    <div style={{ border: "1px solid black", width: "200px" }} >
      <p>Title:{title}</p>
      <img src={image} alt="" width={"100px"} />
    </div>
  );
};

export default Card;
