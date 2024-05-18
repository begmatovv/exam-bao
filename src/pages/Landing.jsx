import { useState, useEffect } from "react";
import { CartList, CartsLanding, Hero, PreFooter } from "../components";
const Landing = () => {
  const [products, setProducts] = useState(null);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((data) => {
        return data.json();
      })
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Hero />
      <div>
        <main className="align-element my-48">
          <CartList />
          <CartsLanding />
          <PreFooter />
        </main>
      </div>
    </div>
  );
};

export default Landing;
