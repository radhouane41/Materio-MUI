import axios, { AxiosResponse } from "axios";

type fetchGetProps = { url: string; token?: string };

export const fetchGetAsync = async <TResponse>({
  url,
  token,
}: fetchGetProps): Promise<AxiosResponse<TResponse>> => {
  try {
    const response = await axios.get(`${url}`, {
      method: "get",
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
