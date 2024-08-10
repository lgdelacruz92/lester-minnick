"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ReferenceData } from "@/lib/types";
import ReferenceItemInfo from "../home/references/reference-item-info";

function References({
  referencesData,
  onReferenceInfoClick,
}: {
  referencesData: Array<ReferenceData>;
  onReferenceInfoClick: (referenceId: string) => void;
}) {
  return (
    <div className="flex flex-row gap-2 p-4">
      {referencesData.map((data, index) => {
        return (
          <ReferenceItemInfo
            key={`${data.name}-${index}`}
            data={data}
            onReferenceClick={onReferenceInfoClick}
          />
        );
      })}
    </div>
  );
}

const referencesData: Array<ReferenceData> = [
  {
    id: "1",
    name: "Jeffrey Eubanks",
    src: "/images/jeff.jpeg",
    title: "Previous Manager",
    review:
      "Lester was a level 2 software engineer on a development team that I managed. Shortly after hiring him, I was quickly impressed by his willingness and ability to dive into unfamiliar territory and make progress with very ambiguous requirements. Lester values modern software development practices and has very up-to-date knowledge on the latest tools, technologies, and practices. Given a daunting task in a complex codebase, he is not afraid to dive in and figure out how to get the job done. I also valued Lester’s willingness to unblock teammates and provide suggestions when people were stuck on a problem. Overall, Lester is a productive software engineer who excels at solving challenging technical problems.",
  },
  {
    id: "2",
    name: "Shinji Kuwayama",
    src: "/images/shinji.jpeg",
    title: "Previous CTO",
    review:
      "Lester's a productive engineer, and a proactive, good-natured teammate. He was well-respected by his team and manager, and I hope to work with him again in the future!",
  },
];

type TransitionType = "open" | "close" | "change";

export default function Playground() {
  const [transition, setTransition] = useState<TransitionType>("close");
  const [curRefId, setCurRefId] = useState<string>(referencesData[0].id);

  const handleReferenceClick = (selectedReferenceId: string) => {
    switch (transition) {
      case "close":
        setTransition("open");
        break;
      case "open":
        if (curRefId === selectedReferenceId) {
          setTransition("close");
        } else {
          setTransition("change");
        }
        break;
      case "change":
        setTransition("close");
        break;
      default:
        break;
    }
    setCurRefId(selectedReferenceId);
  };

  const getReview = (id: string): string => {
    const [refData] = referencesData.filter((d) => d.id === id);
    return refData.review;
  };

  return (
    <div className="w-[500px] bg-card-background">
      <AnimatePresence mode="wait">
        {transition === "open" && (
          <>
            <motion.div
              key={`open-${curRefId}`}
              layoutId={`open-${curRefId}`}
              initial={{
                opacity: 0,
                height: 0,
                width: "100%",
              }}
              animate={{
                opacity: 1,
                height: 200,
                width: "100%",
                transition: { duration: 1 },
              }}
              exit={{ transition: { duration: 0.5 } }}
              className="w-full overflow-y-scroll p-4 text-white shadow-inner shadow-lg"
            >
              {getReview(curRefId)}
            </motion.div>
          </>
        )}
        {transition === "close" && (
          <motion.div
            key={`close-${curRefId}`}
            layoutId={`close-${curRefId}`}
            initial={{
              opacity: 1,
              height: 200,
              width: "100%",
            }}
            animate={{
              opacity: 0,
              height: 0,
              width: "100%",
              transition: { duration: 1 },
            }}
            exit={{ transition: { duration: 0.5 } }}
            className="w-full overflow-y-scroll p-4 text-white shadow-inner shadow-lg"
          >
            {getReview(curRefId)}
          </motion.div>
        )}
        {transition === "change" && (
          <motion.div
            key={`change-${curRefId}`}
            layoutId={`change-${curRefId}`}
            initial={{
              opacity: 0,
              height: 200,
              width: "100%",
            }}
            animate={{
              opacity: 1,
              height: 200,
              width: "100%",
              transition: { duration: 1 },
            }}
            exit={{ transition: { duration: 0.5 } }}
            className="w-full overflow-y-scroll p-4 text-white shadow-inner shadow-lg"
          >
            {getReview(curRefId)}
          </motion.div>
        )}
      </AnimatePresence>
      <References
        referencesData={referencesData}
        onReferenceInfoClick={handleReferenceClick}
      />
    </div>
  );
}
