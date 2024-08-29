import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* chart api  */
export const fetchChartData = async <T>(endpoint: string): Promise<T> => {
  const response = await api.get<T>(endpoint);
  return response.data;
};
