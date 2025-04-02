import { useState } from "react";
import { UserContext } from "../context/UserContext.jsx";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

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
    localStorage.setItem("user", JSON.stringify(cleanedUser));
  };

  const userLogoutHandler = () => {
    setUser(null);
    localStorage.removeItem("user");
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
