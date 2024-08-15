import { ReactNode } from "react";

export default function MobileBlock({ children }: { children: ReactNode }) {
  return <div className="hidden mobile:block">{children}</div>;
}
