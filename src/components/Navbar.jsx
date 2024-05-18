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
              className="dropdown-content z-[1] menu p-2 shadow bg-base-200 text-black rounded-box w-52"
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

          <Link to="./checkout">
            <AiOutlineShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
