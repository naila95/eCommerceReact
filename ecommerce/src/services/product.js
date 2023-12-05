import axios from "axios";

export const getData = async () => {
  let { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

export const getSingleData = async (id) => {
  let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};
