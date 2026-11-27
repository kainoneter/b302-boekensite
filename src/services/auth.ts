import api from "../api/axios";
import type { ApiResponse } from "../types/api";

type LoginResponse = {
    access_token: string,
    expires_in: number
}

export async function login(email: string, password: string){
    const response = await api.post<ApiResponse<LoginResponse>>(
        '/auth/login',
        {email, password},
    );

    return response.data.data
}


export function logout(token: string){
    return api.post('/auth/logout', undefined, {
        headers: { Authorization: `Bearer ${token}`},
    });
}