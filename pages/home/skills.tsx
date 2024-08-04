/* App.js */
import JavascriptIcon from "@/components/icons/javascript-icon";
import ReactIcon from "@/components/icons/react-icon";
import VueIcon from "@/components/icons/vue-icon";
import React from "react";

const skillsData = [
  {
    name: "React",
    years: 8,
    icon: <ReactIcon fill="white" stroke="white" height="80" width="80" />,
  },
  {
    name: "Vue",
    years: 1,
    icon: <VueIcon fill="white" stroke="white" height="80" width="80" />,
  },
  {
    name: "Javascript",
    years: 10,
    icon: <JavascriptIcon fill="white" stroke="white" height="80" width="80" />,
  },
];

const SkillsDisplay = (props: {
  name: string;
  years: number;
  icon: React.JSX.Element;
}) => {
  return (
    <div className="relative mt-2 flex flex-col items-center opacity-80">
      {props.icon}
      <div>{props.name}</div>
      <div className="text-super-script bg-subscript-background absolute right-0 top-0 flex flex-col items-center rounded-full p-2 text-red-500">
        <div className="leading-none text-white">{`${props.years}+`}</div>
        <div className="text-[.5rem] leading-none text-white">years</div>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="flex flex-col items-center rounded-md p-4">
      <div className="text-important-text w-full text-center text-white">
        Skills
      </div>
      <div className="mt-4 text-white">Front-End Skills</div>
      <div className="mt-2 text-white">
        {skillsData.map((data, index) => (
          <SkillsDisplay key={`${data.name}-${index}`} {...data} />
        ))}
      </div>
    </div>
  );
}
