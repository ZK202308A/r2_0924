import useSignin from "./useSignin.ts";

import {Cookies} from 'react-cookie'

const cookies = new Cookies();

const useCheckAuth = () => {

    const {member, doSignin, doSignout} = useSignin()

    const check = () => {

        const stateEmail = member.email

        if(stateEmail){
            return stateEmail
        }
        const cookieValue = cookies.get("member")

        if(!cookieValue){

            return null

        }else {

            doSignin({username: cookieValue.email, password: cookieValue.password})

        }

        return null

    }

    return {check}
}

export default useCheckAuth;