import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { decrementCart, incrementCart } from "../features/cart/cartSlice";

const CartsDrop = () => {
  const dispatch = useDispatch();
  const { orderTotal, numItemsInCart, cartItem } = useSelector(
    (state) => state.cartState
  );

  return (
    <div
      tabIndex={0}
      className="menu menu-lg dropdown-content mt-3 z-[1]  text-black p-4 shadow bg-base-100 rounded-box w-96"
    >
      <div className="flex justify-between items-center mb-5">
        <h4 className="font-bold">Cart ({numItemsInCart})</h4>
        <button onClick={() => dispatch(removeAll)}>Remove All</button>
      </div>
      <div>
        <div>
          <div>
            {cartItem.map((item) => {
              const { image, name, price, amount } = item;
              const { desktop } = image;
              return (
                <div key={item} className="mt-5 flex items-center gap-4">
                  <img src={desktop} alt="" className="w-20 rounded" />
                  <div className="flex flex-col gap-3 mr-auto">
                    <h2>{name}</h2>
                    <p>{price}</p>
                  </div>
                  <div className="flex gap-3 bg-base-300 p-1">
                    <button
                      onClick={() => {
                        if (value >= 1) {
                          dispatch(decrementCart());
                        }
                      }}
                      className="p-1"
                    >
                      -
                    </button>
                    <h1 className="p-2 bg-base-300 text-black rounded">
                      {amount}
                    </h1>
                    <button
                      onClick={() => dispatch(incrementCart())}
                      className="p-1"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" mt-5 p-2">
          <div className="flex justify-between">
            <h2 className="capitalize para-sty">total</h2>
            <p>{orderTotal}$</p>
          </div>
          <Link
            to="/checkout"
            className="btn rounded-none bg-[#D87D4A] text-white border-none mt-5 w-full"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartsDrop;
