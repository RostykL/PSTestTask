import axios from "axios";
import { IAlbums } from "../../types/album";

const baseURL = "https://jsonplaceholder.typicode.com";

export const fetchUserDetails = async (id?: string): Promise<IAlbums[]> => {
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
