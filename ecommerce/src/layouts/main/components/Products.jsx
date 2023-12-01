import React from "react";
import Product from "./Product";

const Products = ({ data }) => {
  return (
    <section>
      <div className="p-10">
        <h1 className="text-3xl">PRODUCTS</h1>
        <div className="flex justify-between w-[100%] flex-wrap">
          {data?.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
