import axios from "axios";
import { IUser } from "../../types/user";

const baseURL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (): Promise<IUser[]> => {
  try {
    const response = await axios.get("/users", { baseURL });

    return response.data;
  } catch (error) {
    throw error;
  }
};
