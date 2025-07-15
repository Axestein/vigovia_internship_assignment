import type { Control } from "react-hook-form";
import {useFieldArray} from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const ActivityTableForm = ({ control }: { control: Control<ItineraryFormData> }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "activityTable",
  });

  const defaultActivity = {
    id: "",
    city: "",
    activity: "",
    type: "",
    duration: "",
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Activity Table</h4>
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-md mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <Input
                {...control.register(`activityTable.${index}.city`)}
                placeholder="Rio Rio Jumbo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Activity</label>
              <Input
                {...control.register(`activityTable.${index}.activity`)}
                placeholder="Sydney Hollow/ Coke & Tungyo Zoo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <Input
                {...control.register(`activityTable.${index}.type`)}
                placeholder="Hotspot/Syjamming"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <Input
                {...control.register(`activityTable.${index}.duration`)}
                placeholder="2-3 Hours"
              />
            </div>
          </div>
          <Button
            variant="danger"
            onClick={() => remove(index)}
            className="text-sm"
          >
            Remove Activity
          </Button>
        </div>
      ))}
      <Button
        onClick={() => append(defaultActivity)}
        variant="secondary"
        className="text-sm"
      >
        Add Activity
      </Button>
    </div>
  );
};