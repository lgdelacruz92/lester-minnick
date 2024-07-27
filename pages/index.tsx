import { Inter } from "next/font/google";
import ProfilePhoto from "./home/profile-photo";
import Skills from "./home/skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-zinc-700`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full rounded-md bg-zinc-900">
          <ProfilePhoto />
        </div>
        <div className="w-full rounded-md bg-zinc-900">
          <Skills />
        </div>
      </div>
    </main>
  );
}
