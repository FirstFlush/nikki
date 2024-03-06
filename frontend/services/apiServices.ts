import { HttpMethod } from "../app/types/enums";


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
    let throwError = options.throwError;
    if (!throwError) {
        throwError = false;
    };
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


export const fetchEmail = async (email: string): Promise<any> => {
    // const response = await fetch('https://nikkiracing.com/api/subscribe/', {
    const response = await fetch("api/subscribe/", {
        // const response = await fetch('http://192.168.1.165:8000/api/subscribe/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });
    if (!response.ok) {
        console.log(response);
        throw new Error("Failed to subscribe");
    }
    return response.json();
};
