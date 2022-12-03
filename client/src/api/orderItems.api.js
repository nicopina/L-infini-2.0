import axios from "axios";
import { BASE_URL } from "../config";

export const createOrderItemRequest = async (orderItem) => {
  return await axios.post(`${BASE_URL}/orderItems`, orderItem);
};

export const getOrderItemsRequest = async () => {
  return await axios.get(`${BASE_URL}/orderItems`);
};

export const getOrderItemRequest = async (id) => {
  return await axios.get(`${BASE_URL}/orderItems/${id}`);
};

export const updateOrderItemRequest = async (id, orderItem) => {
  return await axios.put(`${BASE_URL}/orderItems/${id}`, orderItem);
};

export const deleteOrderItemRequest = async (id) => {
  return await axios.delete(`${BASE_URL}/orderItems/${id}`);
};

export const getOrderItemsByOrderIdRequest = async (id) => {
  return await axios.get(`${BASE_URL}/orderItems/order/${id}`);
};

export const getOrderItemsTopBestN = async (n) => {
  return await axios.get(`${BASE_URL}/orderItems/top/${n}`);
}

export const getOrderItemsTopWorstN = async (n) => {
  return await axios.get(`${BASE_URL}/orderItems/topWorst/${n}`);
}
