import axios from "axios";
import { BASE_URL } from "../config";

export const createUserRequest = async (user) => {
  return await axios.post(`${BASE_URL}/users`, user);
};

export const getUsersRequest = async () => {
  return await axios.get(`${BASE_URL}/users`);
};

export const getUserRequest = async (rut) => {
  return await axios.get(`${BASE_URL}/users/${rut}`);
};

export const updateUserRequest = async (rut, user) => {
  return await axios.put(`${BASE_URL}/users/${rut}`, user);
};

export const deleteUserRequest = async (rut) => {
  return await axios.delete(`${BASE_URL}/users/${rut}`);
};
