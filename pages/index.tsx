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
      className={`flex w-full flex-col items-center justify-between bg-card-background ${inter.className} sm:bg-main-background`}
    >
      <div className="mt-4 flex max-w-[500px] flex-col items-center sm:mt-0 sm:w-full sm:rounded sm:bg-card-background sm:shadow-xl">
        <ProfilePhoto />
        <Skills />
        {/*
        <WorkExperience />
        <References /> */}
      </div>
    </main>
  );
}
