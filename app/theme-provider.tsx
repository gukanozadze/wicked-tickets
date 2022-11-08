"use client";

import { createContext } from "react";

const ThemeContext = createContext("");

export default function ThemeProvider({ children }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
