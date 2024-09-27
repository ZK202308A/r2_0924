import {IMember, ISigninParam} from "../types/member.ts";
import axios from "axios";


const host = 'http://localhost:8090/api/member'


export const postSignin = async (param:ISigninParam):Promise<IMember> => {

    const res = await axios.post(`${host}/login`,
        param,
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})

    return res.data
}

export const refreshRequest = async (accessToken:string, refreshToken:string):Promise<IMember> => {

    const res = await axios.get(`${host}/refresh?refreshToken=${refreshToken}`, {
        headers: {'Authorization': `Bearer ${accessToken}`},
    })
    return res.data

}