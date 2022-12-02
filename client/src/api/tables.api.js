import axios from "axios";
import { BASE_URL } from "../config";


export const createTableRequest = async (table) => {
    return await axios.post(`${BASE_URL}/tables`, table , {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    });
};

export const getTablesRequest = async () => {
    return await axios.get(`${BASE_URL}/tables`);
}

export const getTableRequest = async (id) => {
    return await axios.get(`${BASE_URL}/tables/${id}`);
}

export const updateTableRequest = async (id, table) => {
    return await axios.put(`${BASE_URL}/tables/${id}`, table , {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    });
}

export const deleteTableRequest = async (id) => {
    return await axios.delete(`${BASE_URL}/tables/${id}` , {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    });
}
