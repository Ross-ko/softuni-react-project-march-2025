import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../authContext/AuthContext";

export default function Logout() {
  const { userLogoutHandler } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    userLogoutHandler();
    navigate("/");
  }, [userLogoutHandler, navigate]);

  return null;
}
