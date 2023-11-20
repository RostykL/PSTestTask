import { IUser } from "../../types/user";
import { axiosInstance } from "../axiosInstance";

export const fetchUsers = async (): Promise<IUser[]> => {
  try {
    const response = await axiosInstance.get("/users");

    return response.data;
  } catch (error) {
    throw error;
  }
};
