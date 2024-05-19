import React, { useEffect, useState } from "react";
import { PreFooter, CartList } from "../components";
import BtnRev from "../components/BtnRev";

const Earphones = () => {
  const [products, setProducts] = useState(null);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((data) => {
        return data.json();
      })
      .then((allProducts) => {
        const earphonesCategory = allProducts.filter(
          (product) => product.category === "earphones"
        );
        setProducts(earphonesCategory);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <h1 className="text-white bg-black/90 py-24 text-4xl uppercase flex justify-center mx-auto">
        EARPHONES
      </h1>
      <div className="flex-col static align-element flex lg:justify-start justify-center items-center  ">
        {products &&
          products.map((item) => {
            return (
              <div
                key={item.id}
                className="flex lg:flex-row md:flex-col sm:flex-col justify-between gap-32 items-center"
              >
                <img
                  src={item.image.desktop}
                  alt=""
                  className="lg:w-[540px]  lg:[h-560px] sm:h-[352px] md:h-[352px] md:w-[680px] sm:w-[327px]"
                />
                <div className="align-element flex  justify-center items-center  ">
                  <div className="w-[400px] lg:text-start md:text-center sm:text-center flex flex-col md:items-center sm:items-center gap-6 lg:items-start text-white py-36">
                    <p className="text-base text-gray-300 opacity-30 ">
                      {item.new === true ? "NEW PRODUCT" : ""}
                    </p>
                    <h1 className="uppercase text-black text-5xl">
                      {item.name}
                    </h1>
                    <p className="text-base text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <BtnRev id={item.id} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <CartList />
      <PreFooter />
    </div>
  );
};

export default Earphones;
