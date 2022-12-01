import axios from "axios";
import { BASE_URL } from "../config";

const token = localStorage.getItem("token");

export const signUpRequest = async (user) => {
  return await axios.post(`${BASE_URL}/signup`, user);
};

export const signInRequest = async (user) => {
  return await axios.post(`${BASE_URL}/signin`, user);
};

export const getUserByTokenRequest = async (token) => {
  return await axios.get(`${BASE_URL}/users-by-token/${token}`);
};