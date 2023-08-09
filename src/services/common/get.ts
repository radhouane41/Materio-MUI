import axios, { AxiosResponse } from "axios"

type fetchGetProps = { url: string, token?: string }

export const fetchGet = <TResponse>({
    url,
    token
}: fetchGetProps): Promise<AxiosResponse<TResponse>> => {
    return axios.get(`${url}`, {
        method: "get",
        headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    })
}