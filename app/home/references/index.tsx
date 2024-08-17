"use client";
import { useEffect, useState } from "react";
import { TransitionType } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { referencesData } from "@/static-data/references-data";
import dynamic from "next/dynamic";

const ReferencesList = dynamic(() => import("./references-list"));

export default function References() {
  const [transition, setTransition] = useState<TransitionType | null>(null);
  const [curRefId, setCurRefId] = useState<string>("1");

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
    <div className="flex-1 divide-y divide-divider-color pt-4 shadow-inner">
      <div className="text-center text-important-text text-white">
        References
      </div>
      <div className="bg-card-background-1">
        <AnimatePresence mode="wait">
          {transition === "open" && (
            <>
              <motion.div
                key={transition}
                layoutId={transition}
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
              key={transition}
              layoutId={transition}
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
              key={transition}
              layoutId={transition}
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
              className="overflow-y-scroll p-4 text-white shadow-inner shadow-lg"
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
