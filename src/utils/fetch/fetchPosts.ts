import { IPost } from "../../types/post";
import { axiosInstance } from "../axiosInstance";

export const fetchPosts = async (
  userId?: string | number
): Promise<IPost[]> => {
  try {
    const response = await axiosInstance.get("/posts", {
      params: {
        userId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
