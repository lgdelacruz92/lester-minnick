"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";

type ReferenceData = {
  id: string;
  name: string;
  src: string;
  title: string;
  review: string;
};

function ReferenceItemInfo({
  data,
  onReferenceClick,
}: {
  data: ReferenceData;
  onReferenceClick: (data: string) => void;
}) {
  return (
    <div
      className="flex flex-col items-center"
      onClick={() => onReferenceClick(data.id)}
    >
      <Image
        src={data.src}
        alt={data.name}
        width={100}
        height={100}
        className="h-[64px] w-[64px] rounded-full border-2 border-slate-50 shadow-lg hover:border-slate-500"
      />
      <div className="text-subscript text-white">{data.name}</div>
      <div className="text-subscript font-bold text-white">{data.title}</div>
    </div>
  );
}

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

type ReviewState = {
  transitionType: TransitionType;
  data: ReferenceData;
};

type ReviewStateAction = {
  currentTransitionType: TransitionType;
  newData: ReferenceData | null;
};

const initialReview: ReviewState = {
  transitionType: "close",
  data: referencesData[0],
};

function animationReducer(
  state: ReviewState,
  action: ReviewStateAction,
): ReviewState {
  switch (action.currentTransitionType) {
    case "open":
      return { ...state, transitionType: "open", data: action.newData };
    case "close":
      return { ...state, transitionType: "close" };
    case "change":
      return { ...state, transitionType: "change", data: action.newData };
    default:
      throw new Error();
  }
}

export default function Playground() {
  const [state, dispatch] = useReducer(animationReducer, initialReview);

  const handleReferenceClick = (selectedReferenceId: string) => {
    const currentId = state.data.id;
    if (currentId === selectedReferenceId) {
      dispatch({ currentTransitionType: "close", newData: null });
    }
  };

  return (
    <div className="w-[500px] bg-card-background">
      <AnimatePresence mode="wait">
        {/* {state.currentViewStatus === "close" && (
          <motion.div
            layoutId={`${referenceId}`}
            initial={{
              opacity: 0,
              height: 0,
              width: "100%",
            }}
            animate={{ opacity: 1, height: 200, transition: { duration: 1 } }}
            exit={{ transition: { duration: 0.5 } }}
            className="w-full bg-slate-300 text-white"
          >
            {showReview}
          </motion.div>
        )} */}
      </AnimatePresence>
      <References
        referencesData={referencesData}
        onReferenceInfoClick={handleReferenceClick}
      />
    </div>
  );
}
