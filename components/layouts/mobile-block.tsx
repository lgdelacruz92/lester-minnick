import { ReactNode } from "react";

export default function MobileBlock({ children }: { children: ReactNode }) {
  return <div className="mobile:block hidden">{children}</div>;
}
