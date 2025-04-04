"use client";
import { ReactNode, Suspense, useContext } from "react";
import Category from "../Category";
import Link from "next/link";
import { SidebarContext } from "@/helpers/sidebarcontext.helper";

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
};

function SidebarContainer(props: Props) {
  const context = useContext(SidebarContext);

  return (
    <nav
      className={`md:flex md:w-96 md:h-full md:static fixed md:z-0 top-12 left-0 right-0 bottom-0 z-10 transition-all ${context?.open ? "md:translate-x-0" : "md:translate-x-[-100vh] md:w-0"} ${context?.mobileOpen ? "translate-x-0" : "-translate-x-full"} ${props.className ?? ""}`}
    >
      {props.children}
    </nav>
  );
}

export default SidebarContainer;
