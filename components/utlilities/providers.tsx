"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  );
};

// # Purpose
// - Sets up important providers for the Next.js application.

// # Key Components
// - NextThemesProvider: Manages themes
// - TooltipProvider: Handles tooltips

// # Notable Features
// - Uses "use client" directive (Client Component)
// - Accepts and spreads props to NextThemesProvider
// - Wraps children components

// # Benefits
// - Provides theme functionality app-wide
// - Enables consistent tooltip behavior