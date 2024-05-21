import axios from "axios";

export const getJokes = async () => {
  try {
    const response = await axios.get("/joke/api");
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching jokes:", error);
    throw error;
  }
};
