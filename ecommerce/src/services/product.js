import axios from "axios";

export const getData = async () => {
  let { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
