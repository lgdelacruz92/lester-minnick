import { ReactNode } from "react";

export default function DesktopBlock({ children }: { children: ReactNode }) {
  return <div className="hidden md:block">{children}</div>;
}
