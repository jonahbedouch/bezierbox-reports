"use client";

import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import ContentsEntry from "./ContentsEntry";
import { useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";

type Props = {
  children: ReactNode[] | ReactNode;
};

function Contents(props: Props) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  return <div className="flex flex-col">{props.children}</div>;
}

export default Contents;
