import {createSlice} from "@reduxjs/toolkit";
import {IMember} from "../types/member.ts";
import {i} from "vite/dist/node/types.d-aGj9QkWt";

const initialState:IMember = {
    email:''
}

const signinSlice = createSlice({
    name: "signin",
    initialState: initialState,
    reducers: {
        signin: (state, action) => {
            console.log(state,action)
            const email = action.payload.username
            return {email:email}
        },
        signout: (state, action) => {
            console.log(state,action)
            return {...initialState}
        }
    }
})

export const {signin, signout} = signinSlice.actions

export default signinSlice.reducer;