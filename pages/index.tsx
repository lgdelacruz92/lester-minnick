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
      className={`bg-card-background sm:p-24 flex w-full flex-col items-center justify-between ${inter.className} sm:bg-main-background`}
    >
      <div className="sm:bg-card-background sm:rounded sm:shadow-xl flex flex-col items-center">
        <ProfilePhoto />
        <Skills />
        <WorkExperience />
        <References />
      </div>
    </main>
  );
}
