import Experience from "./experience";
import { ExperienceDetailsData } from "./types";

const experienceData: ExperienceDetailsData = {
  title: "Full Stack Software Engineer",
  id: 123,
  description: [
    "Python, and ML tools",
    "Contributing to banking system app VueJS, HTML, CSS, Typescript, Docker, Kubernetes, Azure, Cypress, and Playwright",
    "Created a file converter to convert our tests written in Cypress into Playwright tests saving devs hundreds of hours of manual conversion",
    "Serviced .NET application for external customers",
  ],
  companyName: "Derivco",
  duration: "June 2023 - Present",
  src: "src",
};

export default function WorkExperience() {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-md p-4">
      <div className="flex items-center text-base font-bold text-white">
        <span className="w-full text-center">Work Experience</span>
      </div>
      <Experience experienceData={experienceData} />
    </div>
  );
}
