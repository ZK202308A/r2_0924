import {useAppDispatch, useAppSelector} from "./rtk.ts";
import {ISigninParam} from "../types/member.ts";
import {postSigninThunk, signout} from "../slices/signinSlice.ts";
import {Cookies} from "react-cookie";

const cookies = new Cookies();

const loadCookie = () => {

    const memberCookie = cookies.get("member");

    //console.log("memberCookie" + memberCookie)

    return memberCookie
}


const useSignin = () => {

    const dispatch = useAppDispatch()
    let member = useAppSelector(state => state.signin)

    if(!member.email){
        member = loadCookie()
    }


    const doSignin = (param:ISigninParam) => {
        dispatch(postSigninThunk(param))
            .unwrap()
            .then( data => {
                console.log("unwrap")
                console.log(data)
                cookies.set("member", data, {path:"/"})
        })
    }

    const doSignout = () => {
        dispatch(signout(null))
        cookies.remove("member", {path:"/"})
    }

    return {member, doSignin, doSignout}
}


export default useSignin
