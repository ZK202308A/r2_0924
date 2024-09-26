import {ISigninParam} from "../../types/member.ts";
import {ChangeEvent, useCallback, useState} from "react";


const initialState: ISigninParam ={
    username:'',
    password:'',
}


function SigninComponent() {

    const [param, setParam] = useState<ISigninParam>({...initialState})

    const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {

        const name:string|undefined = event.target.name;
        const value:string|undefined = event.target.value;

        if(name){
            param[name] = value
            setParam({...param})
        }
    }

    return (
        <div className='w-full m-6 h-1/2 border-4 flex flex-col'>

            <input
                type="text"
                name="username"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Username"
                value={param.username}
                onChange={e => handleChange(e)}
            />
            <input
                type="password"
                name="password"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                value={param.password}
                onChange={e => handleChange(e)}
            />

            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"> Signin</button>

        </div>
    );

}

export default SigninComponent;