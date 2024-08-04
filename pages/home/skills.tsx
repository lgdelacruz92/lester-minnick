/* App.js */
import ReactIcon from "@/components/icons/react-icon";
import React from "react";

export default function Skills() {
  return (
    <div className="flex flex-col items-center rounded-md p-4">
      <div className="text-important-text w-full text-center text-white">
        Skills
      </div>
      <div className="mt-4 text-white">Front-End Skills</div>
      <div className="mt-2 text-white">
        <div className="relative mt-2 flex flex-col items-center opacity-80">
          <ReactIcon fill="white" stroke="white" height="80" width="80" />
          <div>React</div>
          <div className="text-super-script bg-subscript-background absolute right-0 top-0 flex flex-col items-center rounded-full p-2 text-red-500">
            <div className="leading-none text-white">8+</div>
            <div className="text-[.5rem] leading-none text-white">years</div>
          </div>
        </div>
      </div>
    </div>
  );
}
