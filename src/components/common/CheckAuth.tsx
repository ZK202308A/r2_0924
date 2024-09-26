import useSignin from "../../hooks/useSignin.ts";
import useCheckAuth from "../../hooks/useCheckAuth.ts";
import {Navigate} from "react-router-dom";

function CheckAuth({children}: {children: React.ReactNode}) {

    const {check} = useCheckAuth()

    if(!check()) {
        return <Navigate to={'/member/signin'} replace={true}></Navigate>
    }

    return (
        <>
            <div>Check Auth</div>
            {children}
        </>
    );
}

export default CheckAuth;