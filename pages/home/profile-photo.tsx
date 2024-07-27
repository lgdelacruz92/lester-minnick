import Image from "next/image";

import SelfImage from "@/public/images/self.jpg";
import { Meteors } from "@/components/ui/meteors";
import { GlareCard } from "@/components/ui/glare-card";

const SelfData = {
  name: "Lester Minnick",
  title: "Special Full Stack Engineer that can turn coffee into code.",
};

export default function ProfilePhoto() {
  return (
    <GlareCard className="flex flex-col items-center p-4">
      <div className="flex items-center text-base font-bold text-white">
        <span className="w-full text-center">{SelfData.name}</span>
      </div>
      <div className="mb-4 flex text-xs text-white">
        <span className="w-full text-center">{SelfData.title}</span>
      </div>
      <Image
        height={384}
        width={384}
        src={SelfImage.src}
        alt="Self"
        className="relative !m-0 h-44 w-44 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105 sm:size-64"
      />
      <Meteors number={20} />
    </GlareCard>
  );
}
