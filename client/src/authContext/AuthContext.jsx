import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  userLoginHandler: () => {},
  userLogoutHandler: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userLoginHandler = (authData) => {
    const token = authData.token || authData.accessToken;
    if (!token) {
      console.error("No token found in auth data", authData);
      return;
    }
    const updatedUser = { ...authData, token };
    setUser(updatedUser);
    localStorage.setItem("token", token);
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
