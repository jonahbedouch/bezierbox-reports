"use client";
import {
  createContext,
  ReactNode,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Category from "../Category";
import Link from "next/link";
import BoopIcon from "../BoopIcon";
import {
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarLeftExpandFilled,
} from "@tabler/icons-react";
import { SidebarContext } from "@/helpers/sidebarcontext.helper";
import useWindowDimensions from "@/hooks/use-window-dimensions.hook";

type Props = {
  children: ReactNode | ReactNode[];
};

function SidebarProvider(props: Props) {
  const dimensions = useWindowDimensions();
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{ open, setOpen, mobileOpen, setMobileOpen }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
