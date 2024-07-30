// logo, date, title, company
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@/components/common/close-icon";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExperienceDetailsData } from "./types";
import ChevronDown from "@/components/common/chevron-down";

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

const data = [experienceData, experienceData2, experienceData3];

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
  return (
    <>
      {data.map((d) => (
        <div
          key={d.id}
          className="flex w-full p-4 hover:bg-zinc-700"
          onClick={() => {
            setActive(d);
          }}
        >
          <Image
            src={d.src}
            width={100}
            height={100}
            alt="derivco image"
            className="rounded"
          />
          <div className="ml-4 grow">
            <div className="mb-2 uppercase text-white">{d.title}</div>
            <div className="text-tprimary text-left">{d.companyName}</div>
            <div className="text-tprimary text-left">{d.duration}</div>
            <button
              className="bg-tprimary text-primary rounded-full px-4"
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
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.div
              layoutId={`card-${active.title}-${active.id}`}
              ref={ref}
              className="relative flex h-full w-full max-w-[500px] flex-col overflow-hidden rounded shadow-2xl"
              initial={{
                opacity: 0,
                width: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                width: 400,
                height: 400,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
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
                    duration: 0.05,
                  },
                }}
                className="close-button absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-white"
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
                    className="h-32 w-32 -translate-x-[4px] object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.h3
                layoutId={`title-${active.title}-${active.id}`}
                className="bg-mid text-tprimary m-0 p-4 pb-2 font-bold"
              >
                {active.title}
              </motion.h3>
              <div className="bg-mid text-tprimary relative max-h-[250px] overflow-y-scroll p-2 shadow-inner shadow-xl">
                <ul className="list-disc">
                  {active.description.map((desc, i) => {
                    return <li key={`description-${i}`}>{desc}</li>;
                  })}
                </ul>
                {/* <ChevronDown
                  className="absolute bottom-0 left-[50%] text-white"
                  width={24}
                  height={24}
                /> */}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
