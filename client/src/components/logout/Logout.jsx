import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Logout() {
    const { userLogoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        userLogoutHandler();
        navigate("/");
    }, [userLogoutHandler, navigate]);

    return null;
}
