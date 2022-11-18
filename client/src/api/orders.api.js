import axios from "axios";
import { BASE_URL } from "../config";

export const createOrderRequest = async (order) => {
  return await axios.post(`${BASE_URL}/orders`, order);
};

export const getOrdersRequest = async () => {
  return await axios.get(`${BASE_URL}/orders`);
};

export const getOrderRequest = async (id) => {
  return await axios.get(`${BASE_URL}/orders/${id}`);
};

export const updateOrderRequest = async (id, order) => {
  return await axios.put(`${BASE_URL}/orders/${id}`, order);
};

export const deleteOrderRequest = async (id) => {
  return await axios.delete(`${BASE_URL}/orders/${id}`);
};

export const getActiveOrdersRequest = async () => {
  return await axios.get(`${BASE_URL}/active-orders`);
};

export const getIfAllItemsAreOkRequest = async (id) => {
  return await axios.get(`${BASE_URL}/items-ok/${id}`);
};
