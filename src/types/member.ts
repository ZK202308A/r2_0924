


export interface IMember {
    email: string;
    accessToken:string
    refreshToken:string
    roleNames:string[]
    nickname:string
    social:boolean
    pw:string
}

export interface ISigninParam {
    username: string;
    password: string;
}
