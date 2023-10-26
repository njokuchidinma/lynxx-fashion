"use client";
import theme from "@/theme";
import GlobalStyles from "@/theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { LayoutProps } from "@/interfaces";

const StyledContext = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyledContext;
