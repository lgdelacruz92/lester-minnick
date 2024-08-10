"use client";
import Experience from "./experience";

export default function WorkExperience() {
  return (
    <div className="mt-4 flex w-full flex-col items-center divide-y divide-divider-color rounded-md">
      <div className="flex items-center text-important-text text-white">
        Work Experience
      </div>
      <Experience />
    </div>
  );
}
