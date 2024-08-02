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
      className={`bg-card-background flex w-full flex-col items-center justify-between ${inter.className} sm:bg-main-background`}
    >
      <div className="sm:bg-card-background sm:rounded sm:shadow-xl sm:w-full sm:mt-0 mt-4 flex max-w-[500px] flex-col items-center">
        <ProfilePhoto />
        {/* <Skills />
        <WorkExperience />
        <References /> */}
      </div>
    </main>
  );
}
