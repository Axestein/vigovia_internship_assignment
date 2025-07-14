import type { Control } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const TransferForm = ({
  dayIndex,
  control,
}: {
  dayIndex: number;
  control: Control<ItineraryFormData>;
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `days.${dayIndex}.transfers`,
  });

  const defaultTransfer = {
    id: "",
    type: "",
    time: "",
    price: 0,
    maxPeople: 1,
    notes: "",
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Transfers</h4>
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-md mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Transfer Type</label>
              <Input
                {...control.register(`days.${dayIndex}.transfers.${index}.type`)}
                placeholder="Private car, Shuttle, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <Input
                type="time"
                {...control.register(`days.${dayIndex}.transfers.${index}.time`)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price ($)</label>
              <Input
                type="number"
                {...control.register(`days.${dayIndex}.transfers.${index}.price`)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Max People</label>
              <Input
                type="number"
                min="1"
                {...control.register(`days.${dayIndex}.transfers.${index}.maxPeople`)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              {...control.register(`days.${dayIndex}.transfers.${index}.notes`)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>
          <Button
            variant="danger"
            onClick={() => remove(index)}
            className="text-sm"
          >
            Remove Transfer
          </Button>
        </div>
      ))}
      <Button
        onClick={() => append(defaultTransfer)}
        variant="secondary"
        className="text-sm"
      >
        Add Transfer
      </Button>
    </div>
  );
};