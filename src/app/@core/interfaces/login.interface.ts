export interface ILoginForm {
    email: string;
    password: string;
}


export interface IResultLogin {
    status: boolean;
    message: string;
    token?: string;
}

