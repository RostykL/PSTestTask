import axios from "axios";
import { IUser } from "../../types/user";

const baseURL = "https://jsonplaceholder.typicode.com";

export const fetchUserDetails = async (id?: string): Promise<IUser[]> => {
  try {
    const response = await axios.get("/users", {
      baseURL,
      params: {
        id,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
