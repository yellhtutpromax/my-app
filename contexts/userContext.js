import {createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {

    }catch (error) {
      console.log(error.message)
    }
  }
  const register = async (email, password) => {

  }
  const logout = async (email, password) => {

  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  )

}
