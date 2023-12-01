import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { getData } from "../../../services/product";

const Home = () => {
  const [data, setData] = useState();
  const getProducts = () => {
    getData().then((res) => {
      setData(res);
    });
  };
  useEffect(() => {
    getProducts();
  }, []); 
  return (
    <>
      <Products data={data} />
    </>
  );
};

export default Home;
