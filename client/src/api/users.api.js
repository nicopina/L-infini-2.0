import axios from "axios";
import { BASE_URL } from "../config";

export const createUserRequest = async (user) => {
  return await axios.post(`${BASE_URL}/users`, user , {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};

export const getUsersRequest = async () => {
  return await axios.get(`${BASE_URL}/users`, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};

export const getUserRequest = async (rut) => {
  return await axios.get(`${BASE_URL}/users/${rut}`);
};

export const updateUserRequest = async (rut, user) => {
  // console.log(localStorage.getItem("token"));
  return await axios.put(`${BASE_URL}/users/${rut}`, user , {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};

export const deleteUserRequest = async (rut) => {
  return await axios.delete(`${BASE_URL}/users/${rut}`, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
};

export const getRoleRequest = async (rut) => {
  return await axios.get(`${BASE_URL}/users/role/${rut}`);
}
