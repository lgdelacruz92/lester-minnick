"use client";
import Experience from "./experience";

export default function WorkExperience() {
  return (
    <div className="flex flex-1 flex-col items-center divide-y divide-divider-color rounded-md pt-4">
      <div className="flex items-center text-important-text text-white">
        Work Experience
      </div>
      <Experience />
    </div>
  );
}
