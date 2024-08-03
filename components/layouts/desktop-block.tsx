import { ReactNode } from "react";

export default function DesktopBlock({ children }: { children: ReactNode }) {
  return <div className="sm:block hidden">{children}</div>;
}
