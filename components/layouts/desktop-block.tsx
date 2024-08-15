import { ReactNode } from "react";

export default function DesktopBlock({ children }: { children: ReactNode }) {
  return <div className="block sm:hidden">{children}</div>;
}
