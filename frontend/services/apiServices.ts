import { HttpMethod } from "../app/types/enums";


export type ApiCallOptions = {
    url: string;
    method: HttpMethod;
    body?: Object;
    headers?: Record<string, string>;
    errorMessage?: string;
};


export const apiCall = async (options: ApiCallOptions): Promise<any> => {
    const {
        url,
        method,
        body,
        headers = { "Content-Type": "application/json" },
        errorMessage = "API call failed",
    } = options;
    const response = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify({ body }),
    });
    if (!response.ok) {
        console.log(response);
        throw new Error(errorMessage);
    }
    return response.json();
};


export const subscribeEmail = async (email: string): Promise<any> => {
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
