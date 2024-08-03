import Image from "next/image";

import SelfImage from "@/public/images/self.jpg";
import LinkedInIcon from "@/components/common/linked-in-icon";
import GithubIcon from "@/components/common/github-icon";
import DesktopBlock from "@/components/layouts/desktop-block";

const SelfData = {
  name: "Lester Minnick",
  title: "Full Stack Engineer",
  subtitle: "I have a talent for turning coffee into code.",
};

const experiencePillData = [
  {
    src: "/images/derivco.jpeg",
    name: "Derivco",
  },
  {
    src: "/images/leap.jpeg",
    name: "Leap",
  },
  {
    src: "/images/zybooks.jpeg",
    name: "ZyBoooks",
  },
  {
    src: "/images/bloomtrac.jpg",
    name: "Bloomtrac",
  },
  {
    src: "/images/alcon.jpeg",
    name: "Alcon",
  },
];

function ExperiencePill({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col items-center rounded-[20px] p-2 text-center opacity-70">
      <Image
        src={src}
        alt={name}
        width="40"
        height="40"
        className="rounded-full border-2 shadow-lg"
      />
    </div>
  );
}

export default function ProfilePhoto() {
  return (
    <div className="flex w-full flex-row items-start p-4">
      <div className="grow pr-4">
        <div className="text-center text-[2rem] font-bold text-white">
          {SelfData.title}
        </div>
        <div className="mt-2 text-center text-[1rem] text-neutral-400">
          {SelfData.subtitle}
        </div>
        <DesktopBlock>
          <div className="mt-4 flex flex-col items-center">
            <div className="text-[1.25rem] text-white">
              Professional Experience
            </div>
            <div className="grid grid-cols-5">
              {experiencePillData.map((pillData, index) => {
                return (
                  <ExperiencePill
                    key={`${pillData.name}-${index}`}
                    src={pillData.src}
                    name={pillData.name}
                  />
                );
              })}
            </div>
            <button className="rounded-[1rem] bg-neutral-300 px-4 shadow-lg hover:border-2 hover:border-white">
              Contacts
            </button>
          </div>
        </DesktopBlock>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-2 text-center text-[1rem] font-bold text-white sm:text-[1.5rem]">
          {SelfData.name}
        </div>
        <Image
          height={384}
          width={384}
          src={SelfImage.src}
          alt="Self"
          className="!m-0 h-[65px] w-[65px] rounded-full border-2 border-white object-cover object-top !p-0 sm:h-40 sm:w-40"
        />
        <div className="mt-4 flex w-full flex-row items-center justify-center space-x-4 opacity-50">
          <a
            href="https://linkedin.com/in/lgdelacruz"
            className="rounded hover:border-2"
          >
            <LinkedInIcon fill={"var(--cui-blue)"} />
          </a>
          <a
            href="https://github.com/lgdelacruz92"
            className="rounded hover:border-2"
          >
            <GithubIcon fill={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
}
