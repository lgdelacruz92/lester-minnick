import Image from "next/image";
import { ReferenceData } from "@/lib/types";
export default function ReferenceItemInfo({
  data,
  onReferenceClick,
}: {
  data: ReferenceData;
  onReferenceClick: (data: string) => void;
}) {
  return (
    <div
      className="z-1 flex cursor-pointer flex-col items-center"
      onClick={(e) => {
        e.preventDefault();
        onReferenceClick(data.id);
      }}
    >
      <Image
        src={data.src}
        alt={data.name}
        width={100}
        height={100}
        className="h-[64px] w-[64px] rounded-full border-2 border-slate-50 shadow-lg"
      />
      <div className="text-subscript text-white">{data.name}</div>
      <div className="text-subscript font-bold text-white">{data.title}</div>
    </div>
  );
}
