import Image from "next/image";

import SelfImage from "@/public/images/self.jpg";
import LinkedInIcon from "@/components/common/linked-in-icon";
import GithubIcon from "@/components/common/github-icon";

const SelfData = {
  name: "Lester Minnick",
  title: "Full Stack Engineer",
  subtitle: "I have a talent for turning coffee into code.",
};

export default function ProfilePhoto() {
  return (
    <div className="flex w-full flex-row items-start">
      <div className="p-4">
        <div className="text-center text-[2rem] font-bold text-white">
          {SelfData.title}
        </div>
        <div className="mt-2 text-center text-[1.2rem] text-white">
          {SelfData.subtitle}
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <div className="mb-2 text-[1.5rem] font-bold text-white">
          {SelfData.name}
        </div>
        <Image
          height={384}
          width={384}
          src={SelfImage.src}
          alt="Self"
          className="md:h-44 md:w-44 !m-0 h-24 w-24 rounded-full border-2 border-white object-cover object-top !p-0"
        />
        <div className="mt-4 flex w-full flex-row items-center justify-center space-x-4">
          <a href="https://linkedin.com/in/lgdelacruz">
            <LinkedInIcon fill={"var(--cui-blue)"} />
          </a>
          <a href="https://github.com/lgdelacruz92">
            <GithubIcon fill={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
}
