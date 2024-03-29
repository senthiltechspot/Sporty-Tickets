import React from "react";
import { SelectThemeProvider } from "./SelectTheme";

export const IndexProvider = ({ children }: { children: React.ReactNode }) => {
  return <SelectThemeProvider>{children}</SelectThemeProvider>;
};
