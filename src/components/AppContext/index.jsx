import React, { useState } from "react";
import { AppProvider } from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);

  return (
    <AppProvider
      value={{
        songs,
        setSongs,
      }}
    >
      {children}
    </AppProvider>
  )
};

export default AppContextProvider;