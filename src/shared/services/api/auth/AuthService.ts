import { Api } from "../axios-config";

interface IAuth {
    token: string;
}

const auth = async (username: string, password: string): Promise<IAuth | Error> => {
    try {
        const { data } = await Api.post('/service/token', { username, password })
        if (data) {
            return data;
        }
        return new Error('Erro ao realizar login');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro ao realizar login');
    };
};

export const AuthService = {
    auth
}