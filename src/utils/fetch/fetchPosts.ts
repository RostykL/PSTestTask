import axios from "axios";
import { IPost } from "../../types/post";

const baseURL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (
  userId?: string | number
): Promise<IPost[]> => {
  try {
    const response = await axios.get("/posts", {
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
