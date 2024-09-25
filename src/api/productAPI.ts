import axios from "axios";


const host = 'http://localhost:8089/api/products';

export const postAdd = async (formData: FormData): Promise<number> => {

    const res = await axios.post(`${host}/products`, formData)

    return Number(res.data.result)
}
