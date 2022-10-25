import axios from "axios";

import { BASE_URL } from "../config";

export const createRequest = async (request) => {
  return await axios.post(`${BASE_URL}/requests`, request);
};

export const getRequests = async () => {
  return await axios.get(`${BASE_URL}/requests`);
};

export const getRequest = async (id) => {
  return await axios.get(`${BASE_URL}/requests/${id}`);
};

export const updateRequest = async (id, request) => {
  return await axios.put(`${BASE_URL}/requests/${id}`, request);
};

export const deleteRequest = async (id) => {
  return await axios.delete(`${BASE_URL}/requests/${id}`);
};