/* App.js */
import JavascriptIcon from "@/components/icons/javascript-icon";
import ReactIcon from "@/components/icons/react-icon";
import VueIcon from "@/components/icons/vue-icon";
import React from "react";
import TypescriptIcon from "@/components/icons/typescript-icon";
import CSSIcon from "@/components/icons/css-icon";
import HtmlIcon from "@/components/icons/html-icon";

const iconSize = 60;

const skillsData = [
  {
    name: "React",
    years: 8,
    icon: (
      <ReactIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "Vue",
    years: 1,
    icon: (
      <VueIcon fill="white" stroke="white" height={iconSize} width={iconSize} />
    ),
  },
  {
    name: "Typescript",
    years: 10,
    icon: (
      <TypescriptIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "Javascript",
    years: 10,
    icon: (
      <JavascriptIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "Html5",
    years: 10,
    icon: (
      <HtmlIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "CSS3",
    years: 10,
    icon: (
      <CSSIcon fill="white" stroke="white" height={iconSize} width={iconSize} />
    ),
  },
];

skillsData.sort((a, b) => b.years - a.years);

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
    <div className="mt-4 flex flex-col items-center rounded-md">
      <div className="text-important-text w-full text-center text-white">
        Skills
      </div>
      <div className="mt-4 text-white">Front-End Skills</div>
      <div
        className={`mt-2 grid w-full grid-cols-${skillsData.length < 5 ? skillsData.length : 5} gap-2 text-white`}
      >
        {skillsData.map((data, index) => (
          <SkillsDisplay key={`${data.name}-${index}`} {...data} />
        ))}
      </div>
    </div>
  );
}
