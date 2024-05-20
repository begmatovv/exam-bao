import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useDispatch, useSelector } from "react-redux";

import {
  incrementCart,
  decrementCart,
  addItem,
} from "../features/cart/cartSlice";

export const loader = async ({ params }) => {
  const response = await customFetch(`/?id=${params.id}`);
  const products = response.data;
  return { products };
};

function SingleProduct() {
  const { products } = useLoaderData();
  const data = products[0];

  const { value } = useSelector((store) => store.cartState);
  const dispatch = useDispatch();

  const {
    id,
    name,
    image,
    description,
    price,
    features,
    includes,
    gallery,
    others,
  } = data;
  const { desktop } = image;
  const CartProducts = {
    cartID: id + name,
    productsID: id,
    image,
    price,
    name,
    amount: value,
  };
  const AddToCart = () => {
    dispatch(
      addItem({
        products: CartProducts,
      })
    );
  };

  return (
    <>
      {products && (
        <div className="align-element">
          <p className="mt-10">Go Back</p>

          <div key={id}>
            <div className=" mt-10 flex mb-40 ">
              <img src={desktop} alt="" className="w-[540px]" />
              <div className="p-20 flex flex-col gap-5">
                <p className=" text-orange-400">NEW PRODUCT</p>
                <h2 className="font-bold text-[40px] leading-[44px] tracking-[1.5px]">
                  {name}
                </h2>
                <p className="mb-10 font-normal text-[15px] leading-[25px] ">
                  {description}
                </p>
                <p
                  className="font-bold text-[18px] leading-[24px] 
         tracking-[1.3px]"
                >
                  {price}$
                </p>
                <div className="flex gap-5 items-center">
                  <div className="bg-slate-200 px-3 py-3 flex justify-between items-center w-40 rounded-lg">
                    <button
                      className="text-3xl text-orange-400"
                      onClick={() => {
                        if (value >= 1) {
                          dispatch(decrementCart());
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">{value}</span>

                    <button
                      className="text-3xl text-orange-400"
                      onClick={() => dispatch(incrementCart())}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      if (value > 0) {
                        AddToCart();
                      }
                    }}
                    className="capitalize btn btn-primary"
                  >
                    add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" lg:flex lg:gap-[125px] justify-between lg:max-w-[1110px] mb-40">
              <div className="w-[635px]">
                <h3 className="uppercase text-h5 md:text-h3 mb-6">Features</h3>
                <p className="text-base opacity-50">{features}</p>
              </div>
              <div className="mb-[88px] w-[350px]">
                <h3 className="uppercase text-h5 md:text-h3 mb-6">Includes:</h3>
                <ul className="flex flex-col gap-2">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-6">
                      <span className="text-orange-400">{item.quantity}X</span>
                      <span className="text-body opacity-50">{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="container mx-auto flex flex-col gap-5 md:grid-rows-1 mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-[1fr,1.45fr] md:gap-5">
            <div className="flex flex-col justify-between gap-5">
              <div>
                <img
                  className="rounded-lg md:hidden"
                  src={`${gallery.first.mobile}`}
                  alt=""
                />
                <img
                  className="rounded-lg hidden md:block lg:hidden"
                  src={`${gallery.first.tablet}`}
                  alt=""
                />
                <img
                  className="rounded-lg hidden lg:block"
                  src={`${gallery.first.desktop}`}
                  alt=""
                />
              </div>
              <div className="img2">
                <img
                  className="rounded-lg md:hidden"
                  src={`${gallery.second.mobile}`}
                  alt=""
                />
                <img
                  className="rounded-lg hidden md:block lg:hidden"
                  src={`${gallery.second.tablet}`}
                  alt=""
                />
                <img
                  className="rounded-lg hidden lg:block"
                  src={`${gallery.second.desktop}`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <img
                className="rounded-lg md:hidden"
                src={`${gallery.third.mobile}`}
                alt=""
              />
              <img
                className="rounded-lg hidden md:block lg:hidden"
                src={`${gallery.third.tablet}`}
                alt=""
              />
              <img
                className="rounded-lg hidden lg:block"
                src={`${gallery.third.desktop}`}
                alt=""
              />
            </div>
          </div>
          </div>
          
        </div>
      )}
    </>
  );
}

export default SingleProduct;
