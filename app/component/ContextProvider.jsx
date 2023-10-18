"use client";
import { createContext, useContext, useState } from "react";
const ThemeProvider = createContext(null);

function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider.Provider value={{ theme, setTheme }}>
        <div data-theme={theme}>{children}</div>
      </ThemeProvider.Provider>
    </>
  );
}

export default ContextProvider;
export function useTheme() {
  return useContext(ThemeProvider);
}
