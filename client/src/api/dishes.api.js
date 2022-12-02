import axios from "axios";
import { BASE_URL } from "../config";

export const createDishRequest = async (dish) => {
  return await axios.post(`${BASE_URL}/dishes`, dish, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};

export const getDishesRequest = async () => {
  return await axios.get(`${BASE_URL}/dishes`);
};

export const getDishRequest = async (id) => {
  return await axios.get(`${BASE_URL}/dishes/${id}`);
};

export const updateDishRequest = async (id, dish) => {
  return await axios.put(`${BASE_URL}/dishes/${id}`, dish, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};

export const deleteDishRequest = async (id) => {
  return await axios.delete(`${BASE_URL}/dishes/${id}`, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};

export const getActiveDishesRequest = async () => {
  return await axios.get(`${BASE_URL}/active-dishes`);
};
