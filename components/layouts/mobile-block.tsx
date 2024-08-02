import { ReactNode } from "react";

export default function MobileBlock({ children }: { children: ReactNode }) {
  return <div className="sm:hidden block">{children}</div>;
}
