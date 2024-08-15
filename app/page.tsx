import { Inter } from "next/font/google";
import ProfilePhoto from "./home/profile-photo";
import Skills from "./home/skills";
import dynamic from "next/dynamic";
import MobileBlock from "@/components/layouts/mobile-block";
import ScreenNotSupportedBlock from "@/components/layouts/screen-not-supported-block";

const inter = Inter({ subsets: ["latin"] });

const WorkExperience = dynamic(() => import("./home/workexperience"), {
  ssr: false,
});

const References = dynamic(() => import("./home/references"));

export default function Home() {
  return (
    <main
      className={`flex w-full flex-col items-center justify-between bg-card-background ${inter.className} bg-main-background`}
    >
      <ScreenNotSupportedBlock>
        <h1>This screen size is not supported</h1>
      </ScreenNotSupportedBlock>
      <MobileBlock>
        <div className="mt-0 mt-4 flex w-full flex-col items-center rounded bg-card-background shadow-xl">
          <ProfilePhoto />
          <Skills />
          <WorkExperience />
          <References />
        </div>
      </MobileBlock>
    </main>
  );
}
