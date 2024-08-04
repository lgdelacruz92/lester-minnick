/* App.js */
import JavascriptIcon from "@/components/icons/javascript-icon";
import ReactIcon from "@/components/icons/react-icon";
import VueIcon from "@/components/icons/vue-icon";
import React from "react";
import TypescriptIcon from "@/components/icons/typescript-icon";
import CSSIcon from "@/components/icons/css-icon";
import HtmlIcon from "@/components/icons/html-icon";
import PythonIcon from "@/components/icons/python-icon";
import CSharpIcon from "@/components/icons/c-sharp-icon";
import NodeJsIcon from "@/components/icons/node-js-icon";
import SqlIcon from "@/components/icons/sql-icon";
import DockerIcon from "@/components/icons/docker-icon";
import GitIcon from "@/components/icons/git-icon";
import JiraIcon from "@/components/icons/jira-icon";
import GithubBlackIcon from "@/components/icons/github-black-icon";
import VSCodeIcon from "@/components/icons/vscode-icon";
import OpenAIIcon from "@/components/icons/openai-icon";

const iconSize = 60;

const frontEndSkillsData = [
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

frontEndSkillsData.sort((a, b) => b.years - a.years);

const backendSkillsData = [
  {
    name: "Python",
    years: 5,
    icon: (
      <PythonIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "C#",
    years: 2,
    icon: (
      <CSharpIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },

  {
    name: "SQL",
    years: 5,
    icon: (
      <NodeJsIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "Nodejs",
    years: 5,
    icon: (
      <SqlIcon fill="white" stroke="white" height={iconSize} width={iconSize} />
    ),
  },
];

backendSkillsData.sort((a, b) => b.years - a.years);

const techAndToolsSkillsData = [
  {
    name: "Docker",
    years: 10,
    icon: (
      <DockerIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "Git",
    years: 10,
    icon: (
      <GitIcon fill="white" stroke="white" height={iconSize} width={iconSize} />
    ),
  },
  {
    name: "Jira",
    years: 5,
    icon: (
      <JiraIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "Github",
    years: 10,
    icon: (
      <GithubBlackIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "VSCode",
    years: 10,
    icon: (
      <VSCodeIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: "OpenAI",
    years: 2,
    icon: (
      <OpenAIIcon
        fill="white"
        stroke="white"
        height={iconSize}
        width={iconSize}
      />
    ),
  },
];

techAndToolsSkillsData.sort((a, b) => b.years - a.years);

const SkillsDisplay = (props: {
  name: string;
  years: number;
  icon: React.JSX.Element;
}) => {
  return (
    <div className="relative mt-2 flex flex-col items-center opacity-80">
      {props.icon}
      <div className="text-[.8rem] sm:text-[1rem]">{props.name}</div>
      <div className="text-super-script bg-subscript-background absolute right-0 top-0 flex flex-col items-center rounded-full p-2 text-red-500 sm:p-1 sm:text-[.8rem]">
        <div className="leading-none text-white">{`${props.years}+`}</div>
        <div className="text-[.5rem] leading-none text-white">years</div>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="mt-4 flex w-full flex-col items-center rounded-md pb-4 shadow-lg">
      <div className="text-important-text w-full text-center text-white">
        Skills
      </div>
      <div className="border-1 mt-4 w-full opacity-10"></div>
      <div className="border-shaddow mt-4 text-white">Front-End Skills</div>
      <div className={`mt-2 grid grid-cols-4 gap-2 p-4 text-white`}>
        {frontEndSkillsData.map((data, index) => (
          <SkillsDisplay key={`${data.name}-${index}`} {...data} />
        ))}
      </div>
      <div className="border-1 mt-4 w-full opacity-10"></div>
      <div className="mt-4 text-white">Back-End Skills</div>
      <div className={`mt-2 grid grid-cols-4 gap-2 pt-2 text-white`}>
        {backendSkillsData.map((data, index) => (
          <SkillsDisplay key={`${data.name}-${index}`} {...data} />
        ))}
      </div>
      <div className="border-1 mt-4 w-full opacity-10"></div>
      <div className="mt-4 text-white">Tech and Tools</div>
      <div className={`mt-2 grid grid-cols-4 gap-2 pt-2 text-white`}>
        {techAndToolsSkillsData.map((data, index) => (
          <SkillsDisplay key={`${data.name}-${index}`} {...data} />
        ))}
      </div>
    </div>
  );
}
