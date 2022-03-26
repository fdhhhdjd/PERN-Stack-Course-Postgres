import { createContext, useContext, useRef, useState } from "react";

export const Store = createContext();

export const useMyContext = () => useContext(Store);

export const ContextProvider = ({ children }) => {
  const cache = useRef({});
  const [refetching, setRefetching] = useState(false);
  Store.displayName = "Tài Heo Dev";
  const value = { cache, refetching, setRefetching };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
