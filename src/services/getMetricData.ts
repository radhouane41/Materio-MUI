import { fetchGet } from "./common/get";

export type getExampleData = { id: number, title: string }
export const getMetricData = (token: string): Promise<getExampleData> => {
    const url = `https://jsonplaceholder.typicode.com/todos`

    const request = fetchGet<getExampleData[]>({url, token})
    .then((response) => response.data[0])
    .catch()

    return request
}