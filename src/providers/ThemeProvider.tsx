"use client";

import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import lightTheme from "@/themes/lightTheme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <MUIThemeProvider theme={lightTheme}>{children}</MUIThemeProvider>
    </AppRouterCacheProvider>
  );
}
