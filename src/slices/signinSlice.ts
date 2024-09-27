import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMember, ISigninParam} from "../types/member.ts";
import {Cookies} from 'react-cookie'
import {postSignin} from "../api/memberAPI.ts";

const cookies = new Cookies();

const initialState:IMember = {
    email:'',
    accessToken:'',
    refreshToken: '',
    pw:'',
    nickname: '',
    social: false,
    roleNames: []
}

export const postSigninThunk = createAsyncThunk('postSigninThunk', postSignin)


const signinSlice = createSlice({
    name: "signin",
    initialState: initialState,
    reducers: {
        signin: (state, action) => {
            console.log(state,action)
            const email = action.payload.username

            const result = {email:email}
            cookies.set("member",JSON.stringify(result), {path : "/", maxAge: 3600 })

            return result
        },
        signout: (state, action) => {
            console.log(state,action)
            return {...initialState}
        }
    },
    extraReducers: builder => {
        builder
            .addCase(postSigninThunk.fulfilled, (state,action) => {
                console.log("postSigninThunk.fulfilled")

                const result = action.payload
                return result
            })
            .addCase(postSigninThunk.pending, (state,action) => {
                console.log("postSigninThunk.pending")
            })
    }
})

export const {signin, signout} = signinSlice.actions

export default signinSlice.reducer;