import { createContext, RefObject } from "react";

export const ContentProvider = createContext<RefObject<HTMLDivElement> | null>(
  null,
);
