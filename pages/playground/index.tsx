import Image from "next/image";

const referencesData: Array<ReferenceData> = [
  {
    name: "Jeffrey Eubanks",
    src: "/images/jeff.jpeg",
    title: "Previous Manager",
  },
  {
    name: "Shinji Kuwayama",
    src: "/images/shinji.jpeg",
    title: "Previous CTO",
  },
];

type ReferenceData = {
  name: string;
  src: string;
  title: string;
};

function ReferenceImage({ data }: { data: ReferenceData }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={data.src}
        alt={data.name}
        width={100}
        height={100}
        className="h-[64px] w-[64px] rounded-full border-2 border-slate-50 shadow-lg hover:border-slate-500"
      />
      <div className="text-subscript text-white">{data.name}</div>
      <div className="text-subscript font-bold text-white">{data.title}</div>
    </div>
  );
}

function References() {
  return (
    <div className="flex flex-row gap-2 p-4">
      {referencesData.map((data, index) => {
        return <ReferenceImage key={`${data.name}-${index}`} data={data} />;
      })}
    </div>
  );
}

export default function Playground() {
  return (
    <div className="w-[500px] bg-card-background">
      <References />
    </div>
  );
}
