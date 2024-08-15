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
    <main className={`${inter.className}`}>
      <div className="flex flex-col items-center rounded bg-card-background shadow-xl">
        <ProfilePhoto />
        <Skills />
        <WorkExperience />
        <References />
      </div>
    </main>
  );
}
