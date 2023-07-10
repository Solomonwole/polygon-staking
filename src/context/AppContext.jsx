import { createContext, useState } from "react";

const appContext = createContext();

export function AppContextProvider({ children }) {
  const [onLoad, setOnLoad] = useState(false);
  const [validators, setValidators] = useState([]);

  const value = {
    onLoad,
    setOnLoad,
    validators,
    setValidators,
  };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export default appContext;
