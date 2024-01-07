import { decodeToken } from "./decodeToken";

export const isTokenExpired = (token) => {
    if (!token) return true;

    try {
        const jsonPayload = decodeToken(token)
        const { exp } = jsonPayload;

        return Date.now() >= exp * 1000;

    } catch (e) {
        return true;
    }
};
