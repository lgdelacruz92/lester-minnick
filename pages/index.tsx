import { Inter } from "next/font/google";
import ProfilePhoto from "./home/profile-photo";
import Skills from "./home/skills";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const WorkExperience = dynamic(() => import("./home/workexperience"), {
  ssr: false,
});

const References = dynamic(() => import("./home/references"));

export default function Home() {
  return (
    <main
      className={`flex w-full flex-col items-center justify-between p-24 ${inter.className} bg-main-background`}
    >
      <div className="bg-card-background flex flex-col items-center space-y-4 rounded shadow-xl">
        <ProfilePhoto />
        <Skills />
        <WorkExperience />
        <References />
      </div>
    </main>
  );
}
