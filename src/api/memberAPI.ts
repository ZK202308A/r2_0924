import {IMember, ISigninParam} from "../types/member.ts";
import axios from "axios";


const host = 'http://localhost:8090/api/member'


export const postSignin = async (param:ISigninParam):Promise<IMember> => {

    const res = await axios.post(`${host}/login`,
        param,
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})

    return res.data
}