import { ReactNode, Suspense, useState } from "react";
import Category from "../Category";
import Link from "next/link";
import BoopIcon from "../BoopIcon";
import SidebarButton from "./SidebarButton";

function Titlebar() {
  return (
    <div className="flex h-12 items-center fixed bg-secondary-50 dark:bg-secondary-950 transition-[background] w-full border-b border-secondary-900">
      <SidebarButton />
      <h1 className="text-xl font-bold ml-2 text-ellipsis">
        CS184: Graphics – BezierBox
      </h1>
    </div>
  );
}

export default Titlebar;
