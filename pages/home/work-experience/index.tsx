import Experience from "./experience";
import { ExperienceDetailsData } from "./types";

export default function WorkExperience() {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-md">
      <div className="flex items-center pt-4 text-base font-bold text-white">
        <span className="w-full text-center">Work Experience</span>
      </div>
      <Experience />
    </div>
  );
}
