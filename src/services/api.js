import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-back-po70.onrender.com"
})