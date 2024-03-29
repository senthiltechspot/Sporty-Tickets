"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type SelectThemeContextType = {
  selectTheme: boolean;
  setSelectTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectThemeContext = createContext<SelectThemeContextType | undefined>(
  undefined
);

export const SelectThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectTheme, setSelectTheme] = useState(false);

  return (
    <SelectThemeContext.Provider value={{ selectTheme, setSelectTheme }}>
      <main className={selectTheme ? "dark" : "light"}>{children}</main>
    </SelectThemeContext.Provider>
  );
};

export const useSelectTheme = () => {
  const context = useContext(SelectThemeContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
