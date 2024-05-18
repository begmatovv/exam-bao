import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className= " bg-black">
      <div className=" align-element text-white flex flex-col">
        <div className="flex lg:flex-row flex-col md:items-start  sm:items-center gap-8 pt-14 justify-between mb-9 md:flex-wrap">
          <Link className="" to="/">
            Audiophile
          </Link>
          <div>
            <Navlinks />
          </div>
        </div>
        <div className="flex lg:flex-row  md:flex-row md:items-end sm:flex-col sm:items-center justify-between items-end lg:items-center mb-14">
          <div className="sm:mb-12 mb-0">
            {" "}
            <p className=" lg:w-[540px] md:w-[610px] sm:m-w-[320px] mb-14 lg:text-start md:text-start sm:text-center">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="lg:text-start md:text-start sm:text-center">Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="">
            <ul className="flex gap-4">
              <li>
                <Link to="https://www.facebook.com">
                  <FaFacebook className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link to="https://www.twitter.com">
                  <FaTwitter className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com">
                  <FaInstagram className="w-6 h-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
