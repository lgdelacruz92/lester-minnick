"use client";
import Experience from "./experience";

export default function WorkExperience() {
  return (
    <div className="divide-divider-color mt-4 flex flex-col items-center space-y-4 divide-y rounded-md">
      <div className="text-important-text flex items-center text-white">
        Work Experience
      </div>
      <Experience />
    </div>
  );
}
