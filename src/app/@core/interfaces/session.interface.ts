import { IUser } from './user.interface';
export interface ISession {
    expiresIn: string;
    token?: string;
    role?: string;
}

export interface IMeData {
    status: boolean;
    message?: string;
    user?: IUser;
}
