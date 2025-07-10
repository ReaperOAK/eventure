import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
  userID: "",
  setUserID: () => {},
});

export const AppProvider = ({ children }) => {
  const [userID, setUserIDState] = useState(localStorage.getItem("userID") || "");

  const setUserID = (id) => {
    setUserIDState(id);
    localStorage.setItem("userID", id);
  };

  return (
    <AppContext.Provider value={{ userID, setUserID }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
