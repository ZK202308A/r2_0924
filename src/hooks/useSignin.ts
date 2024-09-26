import {useAppDispatch, useAppSelector} from "./rtk.ts";
import {ISigninParam} from "../types/member.ts";
import {signin, signout} from "../slices/signinSlice.ts";


const useSignin = () => {

    const dispatch = useAppDispatch()
    const member = useAppSelector(state => state.signin);


    const doSignin = (param:ISigninParam) => {
        dispatch(signin(param))
    }

    const doSignout = () => {
        dispatch(signout(null))
    }

    return {member, doSignin, doSignout}
}


export default useSignin
