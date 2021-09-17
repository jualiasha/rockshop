import axios from "axios";
const baseUrl = "http://localhost:3001";

export const getAll = async () => {
  const response = await axios.get(baseUrl + "/rocks");
  return response.data;
};

export const addToCart = async (product) => {
  const response = await axios.post(baseUrl + "/cart", product);
  return response.data;
};

export const getCart = async () => {
  const response = await axios.get(baseUrl + "/cart");
  return response.data;
};
