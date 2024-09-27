import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {Cookies} from "react-cookie";
import {refreshRequest} from "../api/memberAPI.ts";

const cookies = new Cookies();

const jwtAxios = axios.create()

const beforeReq = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig=> {

    console.log("before request")

    const memberCookie = cookies.get("member", {path:"/"})

    if(!memberCookie ) {
        throw new Error('Member Cookie not found.')
    }

    const accessToken = memberCookie.accessToken

    console.log("accessToken", accessToken)

    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
}

const failReq = (error:any) => {
    console.log("fail request")
    return Promise.reject(error)
}

//200
const beforeRes = async (res: AxiosResponse):Promise<AxiosResponse> => {
    console.log("before response ")
    const data = res.data

    if(data.error && data.error === 'ERROR_ACCESS_TOKEN'){
        console.log("access token에 문제가 있음 refresh를 시도해봐야함")

        const memberCookie = cookies.get("member", {path:"/"})
        const {accessToken, refreshToken} = memberCookie

        const refreshResult = await refreshRequest(accessToken, refreshToken)
        console.log("refreshResult", refreshResult)
        memberCookie.accessToken = refreshResult.accessToken
        memberCookie.refreshToken = refreshResult.refreshToken

        cookies.set("member", memberCookie, {path:"/", maxAge:(60*60*24*7)})

    }



    return res
}

const failRes = (error:any) => {
    //console.log("fail response")
    //console.log(error.message)
    return Promise.reject({response: {msg: error.message}})
}



jwtAxios.interceptors.request.use(beforeReq, failReq)
jwtAxios.interceptors.response.use(beforeRes, failRes)


export default jwtAxios