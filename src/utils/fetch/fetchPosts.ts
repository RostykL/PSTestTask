import axios from "axios";
import { IPost } from "../../types/post";

const baseURL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (): Promise<IPost[]> => {
  try {
    const response = await axios.get("/posts", { baseURL });

    return response.data;
  } catch (error) {
    throw error;
  }
};
