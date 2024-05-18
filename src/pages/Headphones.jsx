import React, { useEffect, useState } from "react";
import { Cart, CartList, PreFooter } from "../components";
import BtnRev from "../components/BtnRev";
const Headphones = () => {
  const [products, setProducts] = useState(null);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((data) => {
        return data.json();
      })
      .then((allProducts) => {
        const headphonesCategory = allProducts.filter(
          (product) => product.category === "headphones"
        );
        setProducts(headphonesCategory);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="align-element">
      <div className="flex-col static align-element flex lg:justify-start justify-center items-center  ">
        {products &&
          products.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between  gap-32 items-center"
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
                    <BtnRev />
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

export default Headphones;

// import { ReactComponent as RightArrow } from "../../assets/shared/desktop/icon-arrow-right.svg";
// import Button from "../button/button.component";

// const CategoryItem = ({ category }) => {
//   const { id, imgUrl, title, url, classList } = category;
//   return (
//     <div
//       className="bg-[#F1F1F1] rounded-lg flex flex-col items-center sm:max-w-[327px] gap-y-[15px] p-5 relative w-full h-[165px] justify-end xl:max-w-[350px] xl:h-[204px]"
//       key={id}
//     >
//       <img className={classList} src={imgUrl} alt={title} />
//       <h2 className="text-[15px] font-bold uppercase xl:text-[18px] xl:tracking-[1.25px]">
//         {title}
//       </h2>

//       <Button url={url} buttonType="buttonThree">
//         Shop <RightArrow />
//       </Button>
//     </div>
//   );
// };

// export default CategoryItem;
// import CartQuantity from "../cart-quantity/cart-quantity.component";

// const CartItem = ({ cartItem }) => {
//   const { name, price, quantity, slug, id } = cartItem;
//   let USDollar = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
//   return (
//     <div className="flex justify-between items-center">
//       <div className="flex gap-x-4">
//         <img
//           className="rounded-lg w-[64px] h-[64px] object-cover"
//           src={require(`../../assets/cart/image-${slug}.jpg`)}
//           alt="earphones"
//         />
//         <div>
//           <h4 className="text-[#000] font-bold">{name}</h4>
//           <p className=" text-black/50 font-bold">{USDollar.format(price)}</p>
//         </div>
//       </div>
//       <CartQuantity quantity={quantity} updateCart={true} productId={id} />
//     </div>
//   );
// };

// export default CartItem;
