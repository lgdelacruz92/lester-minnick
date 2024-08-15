// logo, date, title, company
"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@/components/icons/close-icon";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExperienceDetailsData } from "../../../lib/types";
import { useBreakpoints } from "@/hooks/useBreakpoints";

const experienceData: ExperienceDetailsData = {
  title: "Full Stack Software Engineer",
  id: 123,
  description: [
    "Python, and ML tools",
    "Contributing to banking system app VueJS, HTML, CSS, Typescript, Docker, Kubernetes, Azure, Cypress, and Playwright",
    "Created a file converter to convert our tests written in Cypress into Playwright tests saving devs hundreds of hours of manual conversion",
    "Serviced .NET application for external customers",
  ],
  companyName: "Derivco",
  duration: "June 2023 - Present",
  src: "/images/derivco.jpeg",
};

const experienceData2: ExperienceDetailsData = {
  title: "React Software Engineer",
  id: 124,
  description: [
    "Python and ML Tools for data analysis",
    "Developed and maintained features for the Leap App using React, OpenAI, NextJS, HTML, CSS, Docker, Kubernetes, SQL (Postgress), Google Cloud Console, Firestore, Fast API, Python, and BigQuery.",
    "Created a slideshow experience showcasing potential rental spaces for retail brands in React, resulting in a 95% customer satisfaction rate.",
    "Serviced .NET application from external customers.",
  ],
  companyName: "Leap",
  duration: "May 2022 - April 2023",
  src: "/images/leap.jpeg",
};

const experienceData3: ExperienceDetailsData = {
  title: "Full Stack Software Engineer",
  id: 125,
  description: [
    "Maintained and developed user content authoring platform using EmberJS, AWS, Python, Flask, Docker, Kubernetes, and TDD.",
    "Worked with .NET Core Web API and Azure ecosystem (hosting, api, storage, and cloud functions)",
    "Developed an XML parsing system to convert existing online textbooks into ZyBooks, reducing creation time significantly.",
  ],
  companyName: "Zybooks (Wiley)",
  duration: "Jan 2020 - May 2022",
  src: "/images/zybooks.jpeg",
};

const experienceData4: ExperienceDetailsData = {
  title: "Sole Full Stack Developer",
  id: 126,
  description: [
    "Developed a web application from scratch using React, NextJS, Firebase, HTML/CSS, JavaScript, Docker, CircleCI, and TDD.",
    "Worked with .NET Core Web API and Azure ecosystem (hosting, api, storage, and cloud functions).",
    "Worked with mobile platforms, gaining valuable experience in creating user interfaces and building scalable backend systems.",
  ],
  companyName: "Bloomtrac (Merged with Curate.Co)",
  duration: "July 2018 - Jan 2020",
  src: "/images/bloomtrac.jpg",
};

const experienceData5: ExperienceDetailsData = {
  title: "Software Engineer",
  id: 127,
  description: [
    "Worked on a company that produces surgical devices using C++, VS 2013/2017, Git, GoogleTest, XML, and Python.",
    "Provided solutions for critical software problems and produced high-quality code complete with tests",
  ],
  companyName: "TrueVision (acquired by Alcon)",
  duration: "April 2017 - May 2018",
  src: "/images/alcon.jpeg",
};

const data = [
  experienceData,
  experienceData2,
  experienceData3,
  experienceData4,
  experienceData5,
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<null | ExperienceDetailsData>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const { isXs } = useBreakpoints();

  return (
    <>
      {data.map((d) => (
        <div
          key={d.id}
          className="flex w-full items-stretch p-4 hover:bg-zinc-700"
          onClick={() => {
            setActive(d);
          }}
        >
          <Image
            src={d.src}
            width={100}
            height={100}
            alt="derivco image"
            className="h-[100px] w-[100px] rounded-full"
          />
          <div className="ml-4">
            <div className="mb-2 uppercase text-white">{d.title}</div>
            <div className="text-left text-tprimary">{d.companyName}</div>
            <div className="text-left text-tprimary">{d.duration}</div>
            <button
              className="mt-2 rounded-full bg-tprimary px-4 text-card-background shadow hover:border hover:border-white"
              onClick={() => {
                setActive(d);
              }}
            >
              Details
            </button>
          </div>
        </div>
      ))}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div
            ref={ref}
            className="fixed left-0 top-0 z-[100] !m-0 grid h-full w-full place-items-center bg-black/40"
          >
            <motion.div
              layoutId={`card-${active.title}-${active.id}`}
              className="relative flex flex-col divide-y divide-divider-color overflow-hidden rounded-lg bg-card-background opacity-100 shadow-2xl"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                width: isXs ? "100%" : 700,
                height: isXs ? 850 : 500,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.1,
                },
              }}
            >
              <motion.button
                key={`button-${active.title}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.1,
                  },
                }}
                className="close-button absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActive(null);
                }}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`image-${active.title}-${active.id}`}
                className="radial-gradient-white flex justify-center p-4"
              >
                <div className="overflow-hidden rounded-full bg-white">
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="h-32 w-32 object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.h3
                layoutId={`title-${active.title}-${active.id}`}
                className="p-4 text-important-text text-white"
              >
                {active.title}
              </motion.h3>
              <motion.div
                layoutId={`title-${active.title}-${active.id}`}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="white-top-down-gradient relative h-full grow overflow-y-scroll pt-4 text-tprimary"
              >
                <ul className="list-disc">
                  {active.description.map((desc, i) => {
                    return <li key={`description-${i}`}>{desc}</li>;
                  })}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
