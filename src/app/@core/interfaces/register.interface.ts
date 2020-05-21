import { IUser } from './user.interface';

export interface IRegisterForm {
    name: string;
    lastname: string;
    email: string;
    password: string;
    birthday: string;
    role?: string;
    active?: boolean;
}

export interface IResultRegister {
    status: boolean;
    message: string;
    user?: IUser;
}

