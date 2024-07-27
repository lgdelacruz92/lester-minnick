import Experience from "./experience";

export default function WorkExperience() {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-md p-4">
      <div className="flex items-center text-base font-bold text-white">
        <span className="w-full text-center">Work Experience</span>
      </div>
      <Experience />
    </div>
  );
}
