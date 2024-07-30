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
  src: "/images/derivco.jpeg",
};

const experienceData2: ExperienceDetailsData = {
  title: "React Software Engineer",
  id: 124,
  description: [
    "Python and ML Tools for data analysis",
    "Developed and maintained features for the Leap App using React, OpenAI, NextJS, HTML, CSS, Docker, Kubernetes, SQL (Postgress), Google Cloud Console, Firestore, Fast API, Python, and BigQuery.",
    "Created a slideshow experience showcasing potential rental spaces for retail brands in React, resulting in a 95% customer satisfaction rate.",
    "Serviced .NET application from external customers.",
  ],
  companyName: "Leap",
  duration: "May 2022 - April 2023",
  src: "/images/leap.jpeg",
};

const experienceData3: ExperienceDetailsData = {
  title: "Full Stack Software Engineer",
  id: 125,
  description: [
    "Maintained and developed user content authoring platform using EmberJS, AWS, Python, Flask, Docker, Kubernetes, and TDD.",
    "Worked with .NET Core Web API and Azure ecosystem (hosting, api, storage, and cloud functions)",
    "Developed an XML parsing system to convert existing online textbooks into ZyBooks, reducing creation time significantly.",
  ],
  companyName: "Zybooks (Wiley)",
  duration: "Jan 2020 - May 2022",
  src: "/images/zybooks.jpeg",
};

const data = [experienceData, experienceData2, experienceData3];

export default function WorkExperience() {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-md">
      <div className="flex items-center pt-4 text-base font-bold text-white">
        <span className="w-full text-center">Work Experience</span>
      </div>
      {data.map((data) => (
        <Experience key={data.id} experienceData={data} />
      ))}
    </div>
  );
}
