import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  const isLoggedIn = !!token;

  const authToken = `Bearer ${token}`;

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setUser(data.userData);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error while fetching fata", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);
  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          storeTokenInLS,
          LogoutUser,
          user,
          authToken,
          isLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return AuthContextValue;
};
