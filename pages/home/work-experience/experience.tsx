// logo, date, title, company
import Image from "next/image";
import DerivcoImage from "@/public/images/derivco.jpeg";

export default function Experience() {
  return (
    <div className="flex w-full">
      <div>
        <Image
          src={DerivcoImage.src}
          width={100}
          height={100}
          alt="derivco image"
          className="rounded-md"
        />
      </div>
      <div className="ml-4 grow">
        <div className="mb-2 text-center uppercase text-white">
          Full Stack Software Engineer
        </div>
        <div className="text-left text-zinc-400">Derivco</div>
        <div className="text-left text-zinc-400">June 2023 - Present</div>
        <button className="rounded-full bg-cyan-600 px-4 text-white">
          Details
        </button>
      </div>
    </div>
  );
}
