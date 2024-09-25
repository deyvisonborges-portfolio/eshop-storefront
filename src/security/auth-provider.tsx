import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { useRouter } from "next/router";

const AuthContext = createContext(null);

type AuthProviderProps = PropsWithChildren;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // useEffect(() => {
  //   // Fetch the user's auth state from your authentication service
  //   // and set the user state accordingly
  // }, []);

  // const login = async (email, password) => {
  //   // Implement your login logic here
  // };

  // const logout = async () => {
  //   // Implement your logout logic here
  // };

  return (
    // <AuthContext.Provider value={{ user, login, logout }}>
    <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
