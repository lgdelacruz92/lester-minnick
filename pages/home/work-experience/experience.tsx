// logo, date, title, company
import Image from "next/image";
import DerivcoImage from "@/public/images/derivco.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@/components/common/close-icon";
import { useOutsideClick } from "@/hooks/use-outside-click";

type ExperienceDetailsData = {
  title: string;
  id: number;
  description: string[];
  src: string;
};

const sampleExperienceDetailsData: ExperienceDetailsData = {
  title: "Full Stack Software Engineer",
  id: 123,
  description: [
    "Python, and ML tools",
    "Contributing to banking system app VueJS, HTML, CSS, Typescript, Docker, Kubernetes, Azure, Cypress, and Playwright",
    "Created a file converter to convert our tests written in Cypress into Playwright tests saving devs hundreds of hours of manual conversion",
    "Serviced .NET application for external customers",
  ],
  src: "src",
};

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
    <div className="flex w-full">
      <Image
        src={DerivcoImage.src}
        width={100}
        height={100}
        alt="derivco image"
        className="rounded"
      />
      <div className="ml-4 grow">
        <div className="mb-2 text-center uppercase text-white">
          {sampleExperienceDetailsData.title}
        </div>
        <div className="text-left text-zinc-400">Derivco</div>
        <div className="text-left text-zinc-400">June 2023 - Present</div>
        <button
          className="rounded-full bg-cyan-600 px-4 text-white"
          onClick={() => setActive(sampleExperienceDetailsData)}
        >
          Details
        </button>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.div
              layoutId={`card-${active.title}`}
              ref={ref}
              className="relative flex h-full w-full max-w-[500px] flex-col overflow-hidden rounded bg-zinc-700 shadow-2xl"
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
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`image-${active.title}`}
                className="radial-gradient-white flex justify-center p-4"
              >
                <div className="overflow-hidden rounded-full bg-white">
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={DerivcoImage.src}
                    alt={active.title}
                    className="h-32 w-32 -translate-x-[4px] object-cover object-top"
                  />
                </div>
              </motion.div>

              <div>
                <div className="p-4">
                  <motion.h3
                    layoutId={`title-${active.title}`}
                    className="font-bold text-zinc-100"
                  >
                    {active.title}
                  </motion.h3>
                  <div className="max-h-[250px] overflow-y-scroll text-neutral-600 text-zinc-300">
                    <ul className="list-disc">
                      {active.description.map((d, i) => {
                        return <li key={`description-${i}`}>{d}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
