import { ReactNode } from "react";

export default function MobileBlock({ children }: { children: ReactNode }) {
  return <div className="block mobile:hidden">{children}</div>;
}
