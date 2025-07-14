import { useFieldArray } from "react-hook-form"; 
import type { Control } from "react-hook-form"; 
import type { ItineraryFormData } from "../types/itinerary";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const ActivityForm = ({
  dayIndex,
  control,
}: {
  dayIndex: number;
  control: Control<ItineraryFormData>;
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `days.${dayIndex}.activities`,
  });

  const defaultActivity = {
    id: "",
    name: "",
    description: "",
    time: "",
    price: 0,
    location: "",
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Activities</h4>
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-md mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Activity Name</label>
              <Input
                {...control.register(`days.${dayIndex}.activities.${index}.name`)}
                placeholder="Morning hike"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <Input
                type="time"
                {...control.register(`days.${dayIndex}.activities.${index}.time`)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <Input
                {...control.register(`days.${dayIndex}.activities.${index}.location`)}
                placeholder="Mount Everest"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price ($)</label>
              <Input
                type="number"
                {...control.register(`days.${dayIndex}.activities.${index}.price`)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              {...control.register(`days.${dayIndex}.activities.${index}.description`)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
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