"use client";
import { ReactNode, Suspense, useContext } from "react";
import Category from "../Category";
import Link from "next/link";
import { SidebarContext } from "@/helpers/sidebarcontext.helper";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  href: string;
};

function SidebarLink(props: Props) {
  const pathname = usePathname();
  const context = useContext(SidebarContext);

  return (
    <Link
      href={props.href}
      className={`w-5/6 mb-2 mx-auto text-md p-2 text-ellipsis rounded-lg ${pathname == props.href ? "bg-secondary-200 dark:bg-secondary-900" : "hover:bg-secondary-100 dark:hover:bg-secondary-900"}`}
      onClick={() => {
        context?.setMobileOpen(false);
      }}
    >
      {props.title}
    </Link>
  );
}

export default SidebarLink;
