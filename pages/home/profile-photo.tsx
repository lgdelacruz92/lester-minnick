import Image from "next/image";

import SelfImage from "@/public/images/self.jpg";

const SelfData = {
  name: "Lester Minnick",
  title: "Special Full Stack Engineer that can turn coffee into code.",
};

export default function ProfilePhoto() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center text-base font-bold text-black dark:text-white">
        <span className="w-full text-center">{SelfData.name}</span>
      </div>
      <div className="mb-4 flex text-xs text-black dark:text-white">
        <span className="w-full text-center">{SelfData.title}</span>
      </div>
      <Image
        height={384}
        width={384}
        src={SelfImage.src}
        alt="Self"
        className="relative !m-0 h-44 w-44 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105 sm:h-96 sm:w-96"
      />
    </div>
  );
}
