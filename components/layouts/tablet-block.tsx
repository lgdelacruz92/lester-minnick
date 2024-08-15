import { ReactNode } from "react";

export default function TabletBlock({ children }: { children: ReactNode }) {
  return <div className="tablet:block hidden">{children}</div>;
}
