import { HttpMethod } from "../app/common/enums";
import { apiRoutes } from "./apiRoutes";
import { SubscirbeFormData, SignInFormData } from "./formTypes";


const defaultHeaders = {
    'content-type': 'application/json'
}

export type ApiCallOptions = {
    url: string;
    method: HttpMethod;
    body?: Object;
    headers?: Record<string, string>;
    errorMessage?: string;
    throwError?: boolean;
};


export const apiCall = async<T> (options: ApiCallOptions): Promise<T | null> => {
    const {url, method, body, headers, errorMessage} = options;
    const throwError = options.throwError || false;
    const fetchOptions:RequestInit = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
    } 

    if (method !== "GET" && method !== "HEAD" && body !== undefined) {
        fetchOptions.body = JSON.stringify(body);
    }
    try {
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            if (throwError) {
                throw new Error(errorMessage || `API call failed. Status: ${response.status}`);
            };
            return null;
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        }
    } catch (error) {
        if(throwError) {
            throw error
        }
    }
    return null
};


export const login = async(loginFormData: SignInFormData): Promise<any> => {
    const response = await fetch(apiRoutes.login, {
        method: "POST",
        headers: defaultHeaders,
        body: JSON.stringify(loginFormData),
        // credentials: 'include',
    })
    if (!response.ok) {
        throw new Error("Failed to login");
    }
    const data = await response.json();

    // localStorage.setItem('accessToken', data.access);
    // localStorage.setItem('refreshToken', data.refresh);
    return data;
}


export const subscribe = async (subscribeFormData: SubscirbeFormData): Promise<any> => {
// export const fetchEmail = async (email: string): Promise<any> => {
    // const response = await fetch("api/subscribe/", {
    const response = await fetch(apiRoutes.subscribe, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(subscribeFormData),
    });
    if (!response.ok) {
        console.log(response);
        throw new Error("Failed to subscribe");
    }
    return response.json();
};
