import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/features/productSlice";

const App = () => {
  const product = useSelector((state) => state.productData.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {product.map((element, index) => {
        return <div key={element.id}>{element.title}</div>;
      })}
    </div>
  );
};

export default App;
