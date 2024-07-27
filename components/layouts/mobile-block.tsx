import { ReactNode } from "react";

export default function MobileBlock({ children }: { children: ReactNode }) {
  return <div className="block md:hidden">{children}</div>;
}
