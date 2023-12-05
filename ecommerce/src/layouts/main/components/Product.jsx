import React, { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import { BasketContext } from "../../../context/BasketContext";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const { basket, setBasket } = useContext(BasketContext);
  const addToBasket = (id) => {
    let basketItem = basket.find((item) => {
      return item.id == id;
    });
    if (!basketItem) {
      let newArr = [...basket];
      newArr.push({ id });
      setBasket(newArr);
    }
  };

  return (
    <div className="p-8 w-[20%]">
      <Link to={`${item.id}`}>
        <img className="w-[100%] h-[200px]" src={item.image} />
      </Link>
      <div className="">
        <h3>{item.title}</h3>
        <div className="flex">
          <h3>{item.price}$</h3>
          <span>
            <SlBasket
              onClick={() => {
                addToBasket(item.id);
              }}
              className="text-2xl cursor-pointer"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
