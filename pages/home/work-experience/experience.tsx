// logo, date, title, company
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@/components/common/close-icon";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ExperienceDetailsData } from "./types";

export default function Experience({
  experienceData,
}: {
  experienceData: ExperienceDetailsData;
}) {
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
    <div
      className="flex w-full p-4 hover:bg-zinc-700"
      onClick={() => setActive(experienceData)}
    >
      <Image
        src={experienceData.src}
        width={100}
        height={100}
        alt="derivco image"
        className="rounded"
      />
      <div className="ml-4 grow">
        <div className="mb-2 text-left uppercase text-white">
          {experienceData.title}
        </div>
        <div className="text-left text-zinc-400">
          {experienceData.companyName}
        </div>
        <div className="text-left text-zinc-400">{experienceData.duration}</div>
        <button
          className="rounded-full bg-cyan-600 px-4 text-white"
          onClick={() => {
            setActive(experienceData);
          }}
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
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActive(null);
                }}
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
                    src={experienceData.src}
                    alt={active.title}
                    className="h-32 w-32 -translate-x-[4px] object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.h3
                layoutId={`title-${active.title}`}
                className="p-4 pb-0 font-bold text-zinc-100"
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
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
