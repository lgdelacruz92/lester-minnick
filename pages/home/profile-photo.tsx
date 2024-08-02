import Image from "next/image";

import SelfImage from "@/public/images/self.jpg";

const SelfData = {
  name: "Lester Minnick",
  title: "Full Stack Engineer",
  subtitle: "I have a talent for turning coffee into code.",
};

export default function ProfilePhoto() {
  return (
    <div className="flex w-full flex-row items-start shadow-lg">
      <div className="max-w-[200px] p-4">
        <div className="text-center text-[2rem] font-bold text-white">
          {SelfData.title}
        </div>
        <div className="mt-2 text-center text-[1.2rem] text-white">
          {SelfData.subtitle}
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <div className="mb-2 text-[1.5rem] font-bold text-white">
          {SelfData.name}
        </div>
        <Image
          height={384}
          width={384}
          src={SelfImage.src}
          alt="Self"
          className="md:h-44 md:w-44 !m-0 h-20 w-20 rounded-full border-2 border-white object-cover object-top !p-0"
        />
      </div>
    </div>
  );
}
