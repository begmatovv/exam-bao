import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartList } from "../components";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import toast from "react-hot-toast";
const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartNum, setCartNum] = useState(1);
  const dispatch = useDispatch();

  const minusClick = () => {
    setCartNum(cartNum - 1);
  };

  const plusClick = () => {
    setCartNum(cartNum + 1);
  };
  const addToCartHandler = () => {
    const cartProduct = {
      id: product.id,
      price: product.price,
      quantity: cartNum,
      totalPrice: product.price,
      name: product.name,
      image: product.image,
    };
    dispatch(addItem(cartProduct));
    toast.success("item added to cart");
  };
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((data) => data.json())
      .then((productData) => setProduct(productData))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="align-element ">
      <div className="py-4">
        <Link className="" to="/">
          Go Back
        </Link>
      </div>
      <div
        key={product.id}
        className="flex justify-between  gap-32 items-center"
      >
        <img
          src={`${product.image.desktop}`}
          alt=""
          className="lg:w-[540px]  lg:[h-560px] sm:h-[327px] md:h-[480px] md:w-[281px] sm:w-[327px]"
        />
        <div className="align-element text-black flex flex-col justify-center items-center  ">
          <div className="lg:w-[445px] md:w-[340px] sm:w-[327px]  text-start flex flex-col md:items-center sm:items-center gap-6 lg:items-start text-white py-36">
            <p className="text-base text-gray-300 opacity-30 ">
              {product.new === true ? "NEW PRODUCT" : ""}
            </p>
            <h1 className="uppercase text-black text-5xl">{product.name}</h1>
            <p className="text-base text-gray-300">{product.description}</p>
            <p className="text-black text-xl">{product.price}$</p>
            <div className="flex gap-4">
              <div className="w-[120px] flex justify-between bg-gray-light p-[15px] items-center">
                <div
                  className="text-[14px] text-black/30 hover:text-cream font-bold tracking-[1px] cursor-pointer"
                  onClick={minusClick}
                  disabled={cartNum === 0 || (cartNum < 0 && true)}
                >
                  -
                </div>
                <div className="text-[14px] text-black font-bold tracking-[1px]">
                  {cartNum}
                </div>
                <div
                  className="text-[14px] text-black hover:text-cream font-bold tracking-[1px] cursor-pointer"
                  onClick={plusClick}
                >
                  +
                </div>
              </div>
              <button
                className="bg-orange-500 py-[15px] w-full hover:bg-cream-light text-white uppercase transition-all duration-150"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={product.image.desktop} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p> */}

      <div className="flex justify-between mb-40">
        <div className="w-[653px]">
          <h2 className="text-3xl mb-8">Features:</h2>
          <p>{product.features}</p>
        </div>
        <div>
          <h2 className="text-3xl mb-8 uppercase">in the box</h2>
          <ul className="flex flex-col gap-4">
            {product.includes.map((item, index) => (
              <li key={index}>
                <span className="text-orange-400 mr-2">{item.quantity} X</span>{" "}
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-40">
        <div className="flex flex-col gap-5">
          <img
            className="w-[445px] h-[280px]"
            src={product.gallery.first.desktop}
            alt={`${product.name} gallery 1`}
          />
          <img
            className="w-[445px] h-[280px]"
            src={product.gallery.second.desktop}
            alt={`${product.name} gallery 2`}
          />
        </div>
        <img
          className="w-[645px] h-[580px]"
          src={product.gallery.third.desktop}
          alt={`${product.name} gallery 3`}
        />
      </div>
      <div className="mb-40 text-center">
        <h2 className="text-3xl uppercase mb-14">You may also like</h2>
        <div>
          {product.others.map((item) => {
            <img src={item.image.desktop} alt="" />;
            <h3>{item.slug}</h3>;
          })}
        </div>
      </div>
      <CartList />
    </div>
  );
};

export default SingleProduct;
