// logo, date, title, company
import Image from "next/image";
import DerivcoImage from "@/public/images/derivco.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import CloseIcon from "@/components/common/close-icon";
import { useOutsideClick } from "@/hooks/use-outside-click";

type DetailsData = {
  title: string;
  id: number;
  description: string;
  ctaText: string;
  ctaLink: string;
  src: string;
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<null | DetailsData>({
    title: "Software",
    id: 123,
    description: "description",
    ctaText: "ctaText",
    ctaLink: "ctaLink",
    src: "src",
  });

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
      <div>
        <Image
          src={DerivcoImage.src}
          width={100}
          height={100}
          alt="derivco image"
          className="rounded-md"
        />
      </div>
      <div className="ml-4 grow">
        <div className="mb-2 text-center uppercase text-white">
          Full Stack Software Engineer
        </div>
        <div className="text-left text-zinc-400">Derivco</div>
        <div className="text-left text-zinc-400">June 2023 - Present</div>
        <button
          className="rounded-full bg-cyan-600 px-4 text-white"
          onClick={() =>
            setActive({
              title: "Software engineer",
              id: 123,
              description: "description",
              ctaText: "ctaText",
              ctaLink: "ctaLink",
              src: "src",
            })
          }
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
              className="relative flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white sm:rounded-3xl md:h-fit md:max-h-[90%] dark:bg-neutral-900"
              initial={{
                opacity: 0,
                width: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                width: 500,
                height: 500,
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
                className="close-button absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div layoutId={`image-${active.title}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={DerivcoImage.src}
                  alt={active.title}
                  className="h-80 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
