import React, { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { BasketContext } from "../../../context/BasketContext";

const Header = () => {
  const { basket } = useContext(BasketContext);
  return (
    <header>
      <div className="container mx-auto flex justify-between bg-blue-200 p-10">
        <div className="">LOGO</div>
        <div className="">
          <ul className="list-none flex justify-between">
            <li>
              <a className="mr-6" href="">
                HOME
              </a>
            </li>
            <li>
              <a className="mr-6" href="">
                ABOUT
              </a>
            </li>
            <li>
              <a className="mr-6" href="">
                BLOG
              </a>
            </li>
            <li>
              <a className="mr-6" href="">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <SlBasket className="mr-6 text-2xl" />
            <span className="absolute top-[-8px] right-[12px] bg-red-600 rounded-xl px-1 text-white text-sm">
              {basket.length}
            </span>
          </div>

          <AiOutlineMenu className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
