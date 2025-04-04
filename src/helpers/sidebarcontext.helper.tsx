import { createContext } from "react";

export const SidebarContext = createContext<{
  open: boolean;
  setOpen: (arg0: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (arg0: boolean) => void;
} | null>(null);
