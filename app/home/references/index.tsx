"use client";
import { useState } from "react";
import { TransitionType } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import ReferencesList from "./references-list";
import { referencesData } from "@/static-data/references-data";

export default function References() {
  const [transition, setTransition] = useState<TransitionType>("close");
  const [curRefId, setCurRefId] = useState<string | null>(null);

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
        if (curRefId === selectedReferenceId) {
          setTransition("close");
        } else {
          setTransition("change");
        }
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
    <div className="divide-y divide-divider-color shadow-inner">
      <div className="w-full text-center text-important-text text-white">
        References
      </div>
      <div className="w-[350px] w-full overflow-x-scroll bg-card-background">
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
                {curRefId && getReview(curRefId)}
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
              {curRefId && getReview(curRefId)}
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
              className="max-w-full overflow-y-scroll p-4 text-white shadow-inner shadow-lg"
            >
              {curRefId && getReview(curRefId)}
            </motion.div>
          )}
        </AnimatePresence>
        <ReferencesList onReferenceInfoClick={handleReferenceClick} />
      </div>
    </div>
  );
}
