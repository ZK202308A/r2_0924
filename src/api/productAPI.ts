import axios from "axios";
import jwtAxios from "../util/jwtUtil.ts";


const host = 'http://localhost:8090/api/products';

const header = {
    headers: {
        'Content-Type': 'multipart/form-data',  // 파일 전송 형식 지정
    }
}

export const postAdd = async (formData: FormData): Promise<number> => {

    const res = await jwtAxios.post(`${host}/`, formData, header)

    return Number(res.data.result)
}

export const getList = async ( page:number = 1, size:number = 10) => {

    const res = await jwtAxios.get(`${host}/list?page=${page}&size=${size}`)

    return res.data

}
