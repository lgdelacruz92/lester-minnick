import { Inter } from "next/font/google";
import ProfilePhoto from "./home/profile-photo";
import Skills from "./home/skills";
import WorkExperience from "./home/workexperience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-full flex-col items-center justify-between p-24 ${inter.className} bg-background`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full rounded-md bg-mid shadow-xl">
          <ProfilePhoto />
        </div>
        <div className="w-full rounded-md bg-mid shadow-xl">
          <Skills />
        </div>
        <div className="w-full rounded-md bg-mid shadow-xl">
          <WorkExperience />
        </div>
      </div>
    </main>
  );
}
