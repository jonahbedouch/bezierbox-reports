import {
  getCachedSidebarContent,
  getSidebarContent,
} from "@/helpers/frontmatter.helper";
import { Suspense } from "react";
import Category from "../Category";
import Link from "next/link";
import SidebarContainer from "./SidebarContainer";
import SidebarLink from "./SidebarLink";

async function Sidebar() {
  const { featured } = await getSidebarContent("projects");

  return (
    <SidebarContainer className="bg-secondary-50 dark:bg-secondary-950 md:border-r md:border-secondary-900 dark:md:border-secondary-900">
      <div className="w-full flex flex-col flex-wrap mt-4">
        <SidebarLink href={`/`} title="Home" />
        {featured.map((value) => (
          <SidebarLink
            key={`sidebar-${value.slug}`}
            href={`/${value.slug}`}
            title={value.title}
          />
        ))}
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
