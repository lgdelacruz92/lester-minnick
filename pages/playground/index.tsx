import Image from "next/image";

const referencesData: Array<ReferenceData> = [
  {
    name: "Jeffrey Eubanks",
    src: "/images/jeff.jpeg",
  },
];

type ReferenceData = {
  name: string;
  src: string;
};

function ReferenceImage({ data }: { data: ReferenceData }) {
  return (
    <Image
      src={data.src}
      alt={data.name}
      width={100}
      height={100}
      className="h-[64px] w-[64px] rounded-full"
    />
  );
}

function References() {
  return (
    <div className="p-4">
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
