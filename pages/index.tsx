import { Inter } from "next/font/google";
import ProfilePhoto from "./home/profile-photo";
import Skills from "./home/skills";
import { Meteors } from "@/components/ui/meteors";
import WorkExperience from "./home/work-experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-full flex-col items-center justify-between p-24 ${inter.className} bg-zinc-500`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full rounded-md bg-zinc-900">
          <ProfilePhoto />
        </div>
        <div className="w-full rounded-md bg-zinc-900">
          <Skills />
        </div>
        <div className="w-full rounded-md bg-zinc-900">
          <WorkExperience />
        </div>
      </div>
    </main>
  );
}
