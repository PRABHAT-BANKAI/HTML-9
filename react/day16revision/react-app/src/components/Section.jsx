import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Section = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const productData = await axios.get("https://fakestoreapi.com/products");

    setData(productData.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product page</h1>
      <div
        style={{
          display: "flex ",
          flexWrap: "wrap",
          gap: "45px",
          justifyContent:"center"
    
        }}
      >
        {data.length > 0 &&
          data.map((element) => {
            return (
              <Card
                key={element.id}
                title={element.title}
                image={element.image}
                price={element.price}
                description={element.description.slice(0, 15)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Section;
