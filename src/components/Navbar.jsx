import Navlinks from "./Navlinks";
import { BsList } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import hero from "../assets/home/desktop/image-hero.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartsDrop from "./CartsDrop";
const Navbar = () => {
  const { numItemsInCart } = useSelector((state) => state.cartState);
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

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" btn-circle">
              <div className="indicator">
                <AiOutlineShoppingCart className="w-6 h-6 text-white" />
                <span className="badge badge-sm indicator-item bg-orange-400 border-none text-black">
                  {numItemsInCart}
                </span>
              </div>
              <div>
                <CartsDrop />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
