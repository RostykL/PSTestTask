import axios from "axios";
import { IAlbums } from "../../types/album";

const baseURL = "https://jsonplaceholder.typicode.com";

export const fetchAlbums = async (userId?: string): Promise<IAlbums[]> => {
  try {
    const response = await axios.get("/albums", {
      baseURL,
      params: {
        userId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
