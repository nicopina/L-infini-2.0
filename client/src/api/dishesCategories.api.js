import axios from "axios";
import { BASE_URL } from "../config";

export const createDishCategoryRequest = async (dishCategory) => {
  return await axios.post(`${BASE_URL}/dishesCategory`, dishCategory, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};

export const getDishesCategoriesRequest = async () => {
  return await axios.get(`${BASE_URL}/dishesCategory`);
};

export const getDishCategoryRequest = async (id) => {
  return await axios.get(`${BASE_URL}/dishesCategory/${id}`);
};

export const updateDishCategoryRequest = async (id, dishCategory) => {
  return await axios.put(`${BASE_URL}/dishesCategory/${id}`, dishCategory, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};

export const deleteDishCategoryRequest = async (id) => {
  return await axios.delete(`${BASE_URL}/dishesCategory/${id}`, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};
