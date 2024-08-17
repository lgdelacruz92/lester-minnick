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
      <div className="bg-card-background-1 container rounded shadow-xl">
        <ProfilePhoto />
        <div className="not-mobile:hidden block">
          <Skills />
        </div>
        <div className="not-mobile:hidden block">
          <WorkExperience />
        </div>
        <div className="not-mobile:hidden block">
          <References />
        </div>
      </div>
    </main>
  );
}
