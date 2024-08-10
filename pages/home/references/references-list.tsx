import { ReferenceData } from "@/lib/types";
import ReferenceItemInfo from "./reference-item-info";
export default function ReferencesList({
  referencesData,
  onReferenceInfoClick,
}: {
  referencesData: Array<ReferenceData>;
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
