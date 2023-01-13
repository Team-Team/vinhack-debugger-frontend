import React from "react";
import { createContext, useContext, useState } from "react";
const themeContext = createContext();
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(atomOneDarkReasonable);

  return (
    <themeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}
export const SetTheme = () => {
  return useContext(themeContext);
};
