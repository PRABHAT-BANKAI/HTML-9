import React, { createContext, useEffect, useState } from "react";
import AllRoutes from "./components/AllRoutes";
export const productContext = createContext();

const App = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("productData")) || []
  );

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <h1>Product Page Admin</h1>
      <productContext.Provider value={{data ,setData}}>
        <AllRoutes />
      </productContext.Provider>
    </div>
  );
};

export default App;
