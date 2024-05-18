import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/cartList/cart-1.png";
import img2 from "../assets/cartList/cart-2.png";
import img3 from "../assets/cartList/cart-3.png";

const CartList = () => {
  return (
    <div className="flex items-center sm:gap-16 justify-center sm:flex-col md:flex-row lg:flex-row gap-7 uppercase text-center mb-40">
      <div className="bg-base-300  rounded cart lg:w-[350px] md:w-[225px] sm:w-[325px]">
        <img className="relative bottom-16 mx-auto" src={img1} alt="" />
        <div className="relative bottom-6">
          <h3 className="text-2xl mb-4">Headphones</h3>
          <Link to="./" className="text-sm">
            SHOP <span className="font-bold  text-orange-300"> Now!</span>
          </Link>
        </div>
      </div>

      <div className="bg-base-300   rounded cart lg:w-[350px] md:w-[225px] sm:w-[325px]">
        <img className="relative bottom-16 mx-auto mb-4" src={img2} alt="" />
        <div className="relative bottom-6">
          <h3 className="text-2xl mb-4">Speakers</h3>
          <Link className="text-sm">
            SHOP <span className="font-bold  text-orange-300"> Now!</span>
          </Link>
        </div>
      </div>

      <div className="bg-base-300   rounded cart lg:w-[350px] md:w-[225px] sm:w-[325px]">
        <img className="relative bottom-16 mx-auto mb-8" src={img3} alt="" />
        <div className="relative bottom-6">
          <h3 className="text-2xl mb-4">Earphones</h3>
          <Link className="text-sm">
            SHOP <span className="font-bold  text-orange-300"> Now!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartList;
