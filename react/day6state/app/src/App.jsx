import { useState } from "react";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  const [count, setCount] = useState(0);

  let object = {
    userName: "batman",
    age: "44",
    power: "billionare",
  };

  return (
    <div>
      <Navbar  data={object} />
      {/* props passing from parent to child */}
      <Section count={count} setCount={setCount} />
      <Footer extraCount={count} />
      <Footer extraCount={count} />
      <Footer extraCount={count} />
      <Footer extraCount={count} />
      <Footer extraCount={count} />
    </div>
  );
};

export default App;
