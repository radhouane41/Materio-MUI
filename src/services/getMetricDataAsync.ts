import { json } from "stream/consumers";
import { fetchGetAsync } from "./common/getAsync";

export type getExampleData = { id: number; title: string };
export const getMetricDataAsync = async (
  token: string
): Promise<getExampleData> => {
  const url = `https://localhost:8080/data`//`https://jsonplaceholder.typicode.com/todos`;

  try {
    const response = await fetchGetAsync<getExampleData[]>({ url, token });
    return response.data[0];
  } catch (error) {
    console.log("error");
    throw error;
  }
};
