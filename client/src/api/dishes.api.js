import axios from "axios";
import { BASE_URL } from "../config";

export const createDishRequest = async (dish) => {
  return await axios.post(`${BASE_URL}/dishes`, dish);
};

export const getDishesRequest = async () => {
  return await axios.get(`${BASE_URL}/dishes`);
};

export const getDishRequest = async (id) => {
  return await axios.get(`${BASE_URL}/dishes/${id}`);
};

export const updateDishRequest = async (id, dish) => {
  return await axios.put(`${BASE_URL}/dishes/${id}`, dish);
};

export const deleteDishRequest = async (id) => {
  return await axios.delete(`${BASE_URL}/dishes/${id}`);
};
