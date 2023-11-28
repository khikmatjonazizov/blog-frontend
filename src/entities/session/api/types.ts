import { User } from '@/shared/models/interfaces';

export type SignInResponse = {
    token: string;
    user: User;
}

export type SignInRequestBody = {
    email: string;
    password: string;
}
