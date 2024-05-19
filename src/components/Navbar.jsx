import Navlinks from "./Navlinks";
import { BsList } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import hero from "../assets/home/desktop/image-hero.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="align-element text-white">
        <div className=" navbar border-b-2 py-9 flex justify-between">
          <div className="lg:hidden dropdown dropdown-bottom ">
            <div tabIndex={0} role="button" className="btn m-1">
              <BsList />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] text-black  menu menu-vertical p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Navlinks />
            </ul>
          </div>
          <div className="">
            <span>AUDIOPHILE</span>
          </div>
          <div className=" lg:flex hidden">
            <Navlinks />
          </div>

          <div className="dropdown dropdown-end  text-black">
            {" "}
            <AiOutlineShoppingCart
              className="w-6 h-6 text-white "
              tabIndex={0}
              role="button"
            />
            <div
              tabIndex={0}
              className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-80"
            >
              <div className="flex flex-col p-5">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl">Cart()</span>
                  <span className="underline">Remove all</span>
                </div>
                <div className="cart flex justify-between">
                  <img src="" alt="" />
                  <div className="">
                    <h3>name</h3>
                    <span>price</span>
                  </div>
                  <div className="flex items-center gap-3 bg-base-300">
                    <button
                      className=" text-[14px] text-black hover:text-cream font-bold tracking-[1px] cursor-pointer"

                      // disabled={cartNum === 0 || (cartNum < 0 && true)}
                    >
                      -
                    </button>
                    <div className=" text-[14px] text-black font-bold tracking-[1px]">
                      {/* {cartNum} */}0
                    </div>
                    <button
                      className=" text-[14px] text-black hover:text-cream font-bold tracking-[1px] cursor-pointer"
                      // onClick={plusClick}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="btn bg-orange-400 text-white">
                  {" "}
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
