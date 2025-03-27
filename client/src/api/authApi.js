import { useEffect, useCallback, useRef, useContext } from "react";
import request from "../utils/request.js";
import { UserContext } from "../context/UserContext.jsx";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
    const abortControllerRef = useRef(null);

    useEffect(() => {
        abortControllerRef.current = new AbortController();
        return () => abortControllerRef.current?.abort();
    }, []);

    const login = useCallback(async (email, password) => {
        if (!abortControllerRef.current) {
            abortControllerRef.current = new AbortController();
        }

        try {
            const authData = await request.post(
                `${baseUrl}/login`,
                {
                    email,
                    password,
                },
                { signal: abortControllerRef.current.signal }
            );

            return authData;
        } catch (error) {
            if (error.name === "AbortError") {
                console.warn("Login request was aborted");
            } else {
                console.error("Login error:", error);
            }
            throw error;
        }
    }, []);

    return { login };
};

export const useRegister = () => {
    const abortControllerRef = useRef(null);

    const register = async (email, password) => {
        abortControllerRef.current = new AbortController();

        try {
            const response = await request.post(
                `${baseUrl}/register`,
                { email, password },
                { signal: abortControllerRef.current.signal }
            );
            return response;
        } catch (error) {
            if (error.name === "AbortError") {
                console.warn("Registration request was aborted");
            } else {
                throw new Error(error.message || "Registration failed");
            }
        }
    };

    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    return { register };
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler} = useContext(UserContext);
    useEffect(() => {
        if(!accessToken) {
            return;
        }
        const options = {
            headers: {
                "X-Authorization": accessToken,
            },
        };

        request.get(`${baseUrl}/logout`, null, options).then(userLogoutHandler)
    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};
