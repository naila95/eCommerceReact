import React, { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import { BasketContext } from "../../../context/BasketContext";

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
      <div className="">
        <img className="w-[100%] h-[200px]" src={item.image} />
      </div>
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
