"use client";
import Image from "next/image";

import SelfImage from "@/public/images/self.jpg";
import LinkedInIcon from "@/components/icons/linked-in-icon";
import GithubIcon from "@/components/icons/github-icon";
import MobileIcon from "@/components/icons/mobile-icon";
import EmailIcon from "@/components/icons/email-icon";
import { useState } from "react";
import dynamic from "next/dynamic";
import YoutubeIcon from "@/components/icons/youtube-icon";
import Skills from "./skills";

const Modal = dynamic(() => import("@/components/common/modal"));

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
  const [showContacts, setShowContacts] = useState<boolean>(false);
  return (
    <div className="not-mobile:divide not-mobile:divide-white/20 not-mobile:divide-x not-mobile:flex not-mobile:flex-row shadow-lg">
      <div className="not-mobile:divide not-mobile:divide-white/20 not-mobile:divide-y grow">
        <div id="header" className="not-mobile:shadow-lg p-4">
          <div className="text-center text-important-text font-bold text-white">
            {SelfData.title}
          </div>
          <div className="mt-2 text-center text-[1rem] text-neutral-400">
            {SelfData.subtitle}
          </div>
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
          </div>
          <div className="flex flex-row justify-center">
            <button
              onClick={() => setShowContacts(true)}
              className={`mt-2 rounded-[1rem] bg-neutral-300 px-4 shadow-lg hover:border-2 hover:border-white ${showContacts ? "pointer-events-none" : ""}`}
            >
              Contacts
            </button>
          </div>
        </div>
        <div className="not-mobile:block hidden">
          <Skills />
        </div>
        <Modal
          showModal={showContacts}
          setShowModal={() => setShowContacts(false)}
        >
          <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] flex-col rounded-lg bg-white p-4">
            <div className="text-center font-bold opacity-70">Contacts</div>
            <div className="mt-2 flex flex-row items-center opacity-50">
              <span>
                <EmailIcon width="16" height="16" fill="var(--cui-gray)" />
              </span>
              <span className="ml-2 text-nowrap">lgdelacruz92@gmail.com</span>
            </div>
            <div className="mt-2 flex flex-row items-center opacity-50">
              <span>
                <MobileIcon width="16" height="16" fill="var(--cui-gray)" />
              </span>
              <span className="ml-2">805-319-8724</span>
            </div>
          </div>
        </Modal>
      </div>
      <div className="not-mobile:w-[300px] flex w-full flex-col items-center p-4">
        <div className="mb-2 text-center text-[1.5rem] text-[1rem] font-bold text-white">
          {SelfData.name}
        </div>
        <Image
          height={384}
          width={384}
          src={SelfImage.src}
          alt="Self"
          className="not-mobile:size-[250px] size-[150px] rounded-full border-2 border-white object-cover object-top"
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
          <a
            href="https://www.youtube.com/@breakdancer100/videos"
            className="rounded hover:border-2"
          >
            <YoutubeIcon fill={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
}
