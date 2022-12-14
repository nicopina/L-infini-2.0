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

export const getOrderItemsTopBestNByDate = async (fecha_inicial, fecha_final, n) => {
  return await axios.get(`${BASE_URL}/orderItems/top/${fecha_inicial}/${fecha_final}/${n}`);
}

export const getProfitToday = async () => {
  return await axios.get(`${BASE_URL}/orderItems/profit/today`);
}

export const getProfitEntireMonth = async () => {
  return await axios.get(`${BASE_URL}/orderItems/profit/actual_month`);
}

export const getProfitByOneDate = async (date) => {
  return await axios.get(`${BASE_URL}/orderItems/profit/${date}`);
}

export const getProfitByDateRange = async (fecha_inicial, fecha_final) => {
  return await axios.get(`${BASE_URL}/orderItems/profit/${fecha_inicial}/${fecha_final}`);
}

export const getItemsSoldByHour = async () => {
  return await axios.get(`${BASE_URL}/orderItems-quantity-hour`);
}

export const getProfitByAllDates = async () => {
  return await axios.get(`${BASE_URL}/orderItems-profit-all-dates`);
}
