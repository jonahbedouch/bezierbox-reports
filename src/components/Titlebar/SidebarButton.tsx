"use client";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftCollapseFilled,
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarLeftExpandFilled,
} from "@tabler/icons-react";
import React, { useContext } from "react";
import BoopIcon from "../BoopIcon";
import { SidebarContext } from "@/helpers/sidebarcontext.helper";
import useWindowDimensions from "@/hooks/use-window-dimensions.hook";

const SidebarButton = () => {
  const dimensions = useWindowDimensions();
  const context = useContext(SidebarContext);

  return (
    <button
      className="w-10 h-10 ml-2 my-1 rounded hover:bg-secondary-200 dark:hover:bg-secondary-900 "
      onClick={() => {
        if (dimensions.width != undefined && dimensions.width > 768) {
          context?.setOpen(!context.open);
        } else if (dimensions.width != undefined) {
          context?.setMobileOpen(!context.mobileOpen);
        } else {
          context?.setOpen(!context.open);
          context?.setMobileOpen(!context.mobileOpen);
        }
      }}
    >
      <div className="w-8 h-8 relative mx-auto">
        <BoopIcon
          base={<IconLayoutSidebarLeftExpand />}
          boop={<IconLayoutSidebarLeftExpandFilled />}
          className={`w-8 h-8 ${context?.open ? "md:hidden" : "md:block"} ${context?.mobileOpen ? "hidden" : "block"}`}
        />
        <BoopIcon
          base={<IconLayoutSidebarLeftCollapse />}
          boop={<IconLayoutSidebarLeftCollapseFilled />}
          className={`w-8 h-8 ${context?.open ? "md:block" : "md:hidden"} ${context?.mobileOpen ? "block" : "hidden"}`}
        />
      </div>
    </button>
  );
};

export default SidebarButton;
