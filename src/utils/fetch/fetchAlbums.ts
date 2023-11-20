import { IAlbums } from "../../types/album";
import { axiosInstance } from "../axiosInstance";

export const fetchAlbums = async (userId?: string): Promise<IAlbums[]> => {
  try {
    const response = await axiosInstance.get("/albums", {
      params: {
        userId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
