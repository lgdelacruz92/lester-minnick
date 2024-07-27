// logo, date, title, company
import Image from "next/image";
import DerivcoImage from "@/public/images/derivco.jpeg";

export default function Experience() {
  return (
    <div className="flex">
      <div>
        <Image
          src={DerivcoImage.src}
          width={100}
          height={100}
          alt="derivco image"
          className="rounded-md"
        />
      </div>
    </div>
  );
}
