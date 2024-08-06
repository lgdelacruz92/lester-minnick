import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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

type ReferenceData = {
  id: string;
  name: string;
  src: string;
  title: string;
  review: string;
};

function ReferenceItemInfo({
  data,
  onReferenceInfoClick,
}: {
  data: ReferenceData;
  onReferenceInfoClick: (data: ReferenceData) => void;
}) {
  return (
    <div
      className="flex flex-col items-center"
      onClick={() => onReferenceInfoClick(data)}
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
  onReferenceClick,
}: {
  referencesData: Array<ReferenceData>;
  onReferenceClick: (referenceInfo: ReferenceData) => void;
}) {
  return (
    <div className="flex flex-row gap-2 p-4">
      {referencesData.map((data, index) => {
        return (
          <ReferenceItemInfo
            key={`${data.name}-${index}`}
            data={data}
            onReferenceInfoClick={onReferenceClick}
          />
        );
      })}
    </div>
  );
}

export default function Playground() {
  const [referenceInfo, setReferenceInfo] = useState<ReferenceData | null>(
    null,
  );
  const handleReferenceClick = (selectedReferenceInfo: ReferenceData): void => {
    if (referenceInfo && referenceInfo.id === selectedReferenceInfo.id) {
      setReferenceInfo(null);
    } else {
      setReferenceInfo(selectedReferenceInfo);
    }
  };
  return (
    <div className="w-[500px] bg-card-background">
      <AnimatePresence mode="wait">
        {referenceInfo && (
          <motion.div
            layoutId={`${referenceInfo.id}`}
            initial={{
              opacity: 0,
              height: 0,
              width: "100%",
            }}
            animate={{ opacity: 1, height: 200, transition: { duration: 1 } }}
            exit={{ transition: { duration: 0.5 } }}
            className="text-white"
          >
            {referenceInfo.review}
          </motion.div>
        )}
      </AnimatePresence>
      <References
        referencesData={referencesData}
        onReferenceClick={handleReferenceClick}
      />
    </div>
  );
}
