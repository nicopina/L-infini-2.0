import axios from "axios";
import { BASE_URL } from "../config";

export const createDownloadOrdersProfitCSV = async (download) => {
    return await axios.get(`${BASE_URL}/downloads/orders-profit`, {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    });
    }