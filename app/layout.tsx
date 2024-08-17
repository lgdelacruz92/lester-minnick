import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0">{children}</body>
      <Analytics />
    </html>
  );
}
