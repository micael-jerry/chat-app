import { AxiosRequestConfig } from "axios";

export const config = (token: string): AxiosRequestConfig => {
    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    };
    return config;
};