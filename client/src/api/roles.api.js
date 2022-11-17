import axios from "axios";
import { BASE_URL } from "../config";

export const createRoleRequest = async (role) => {
  return await axios.post(`${BASE_URL}/roles`, role);
};

export const getRolesRequest = async () => {
  return await axios.get(`${BASE_URL}/roles`);
};

export const getRoleRequest = async (id) => {
  return await axios.get(`${BASE_URL}/roles/${id}`);
};

export const updateRoleRequest = async (id, role) => {
  return await axios.put(`${BASE_URL}/roles/${id}`, role);
};

export const deleteRoleRequest = async (id) => {
  return await axios.delete(`${BASE_URL}/roles/${id}`);
};
