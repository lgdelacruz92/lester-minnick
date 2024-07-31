"use client";
import Experience from "./experience";

export default function WorkExperience() {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-md">
      <div className="text-white flex items-center pt-4 text-base font-bold">
        <span className="w-full text-center">Work Experience</span>
      </div>
      <Experience />
    </div>
  );
}
