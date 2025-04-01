import { useState } from "react";
import { UserContext } from "../context/UserContext.jsx";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userLoginHandler = (authData) => {
    const accessToken = authData.accessToken || authData.token;
  
    if (!accessToken) {
      console.error("No token found in auth data", authData);
      return;
    }
  
    const cleanedUser = {
      email: authData.email,
      _id: authData._id,
      accessToken,
    };
  
    setUser(cleanedUser);
    localStorage.setItem("token", accessToken);
  };

  const userLogoutHandler = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLoginHandler,
        userLogoutHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};