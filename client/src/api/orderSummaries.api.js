import axios from "axios";
import { BASE_URL } from "../config";

export const getOrderSummariesRequest = async () => {
  return await axios.get(`${BASE_URL}/orderSummaries`);
};

export const getOrderSummaryRequest = async (id) => {
  return await axios.get(`${BASE_URL}/orderSummaries/${id}`);
};

export const updateOrderSummaryRequest = async (id, orderSummary) => {
  return await axios.put(`${BASE_URL}/orderSummaries/${id}`, orderSummary);
};

export const deleteOrderSummaryRequest = async (id) => {
  return await axios.delete(`${BASE_URL}/orderSummaries/${id}`);
};

export const createOrderRequest = async (order) => {
  return await axios.post(`${BASE_URL}/orders`, order);
};

export const getActiveOrderSummariesRequest = async () => {
    return await axios.get(`${BASE_URL}/active-orderSummaries`);
    }

