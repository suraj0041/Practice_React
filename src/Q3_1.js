import React, { useContext, useState } from "react";
export const ThemContext = React.createContext();
export const ThemUpdatecontext = React.createContext();

export function useTheme() {
  return useContext(ThemContext);
}

export function useThemeUpdate() {
  return useContext(ThemUpdatecontext);
}

export default function Q3_1({ children }) {
  const [darkThem, setdarkThem] = useState(true);
  function toggaltheme() {
    let toggal = (darkThem) => !darkThem;
    setdarkThem(toggal);
  }
  return (
    <ThemContext.Provider value={darkThem}>
      <ThemUpdatecontext.Provider value={toggaltheme}>
        {children}
      </ThemUpdatecontext.Provider>
    </ThemContext.Provider>
  );
}
