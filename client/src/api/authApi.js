import { useEffect, useCallback, useRef } from "react";
import request from "../utils/request.js";

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
            const authData = await request.post(`${baseUrl}/login`, {
                email,
                password,
            }, { signal: abortControllerRef.current.signal });

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