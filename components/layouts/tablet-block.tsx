import { ReactNode } from "react";

export default function TabletBlock({ children }: { children: ReactNode }) {
  return <div className="block tablet:hidden">{children}</div>;
}
