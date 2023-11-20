import { IUser } from "../../types/user";
import { axiosInstance } from "../axiosInstance";

export const fetchUserDetails = async (id?: string): Promise<IUser[]> => {
  try {
    const response = await axiosInstance.get("/users", {
      params: {
        id,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
