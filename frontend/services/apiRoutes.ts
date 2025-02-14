type ApiRoutes = {

    subscribe: string;
    gallery: string;
    login: string;
}

export const apiRoutes: ApiRoutes = {

    subscribe: `${process.env.NEXT_PUBLIC_API_URL}/api/subscribe/`,
    gallery: `${process.env.NEXT_PUBLIC_API_URL}/api/nikki/gallery/`,
    // login: `${process.env.NEXT_PUBLIC_API_URL}/api/account/login/`
    login: `${process.env.NEXT_PUBLIC_API_URL}/api/token/`,

}


