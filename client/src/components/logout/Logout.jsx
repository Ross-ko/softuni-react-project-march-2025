import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Изчистваме данните за сесията, напр. токена
        localStorage.removeItem("token");
        // Пренасочваме към началната страница
        navigate("/");
    }, [navigate]);

    return null;
}
