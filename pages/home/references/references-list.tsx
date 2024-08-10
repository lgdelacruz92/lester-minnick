import ReferenceItemInfo from "./reference-item-info";
import { referencesData } from "@/static-data/references-data";
export default function ReferencesList({
  onReferenceInfoClick,
}: {
  onReferenceInfoClick: (referenceId: string) => void;
}) {
  return (
    <div className="flex flex-row gap-2 p-4">
      {referencesData.map((data, index) => {
        return (
          <ReferenceItemInfo
            key={`${data.name}-${index}`}
            data={data}
            onReferenceClick={onReferenceInfoClick}
          />
        );
      })}
    </div>
  );
}
