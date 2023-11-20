import axios, { CreateAxiosDefaults } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL!,
} as CreateAxiosDefaults);
