import type { Control } from "react-hook-form";
import {useFieldArray} from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { ActivityForm } from "./ActivityForm";
import { TransferForm } from "./TransferForm";
import { FlightForm } from "./FlightForm";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const DaySection = ({ control }: { control: Control<ItineraryFormData> }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "days",
  });

  const defaultDay = {
    id: Date.now().toString(),
    date: new Date(),
    activities: [{
      id: Date.now().toString(),
      name: "",
      description: "",
      time: "",
      price: 0,
      location: ""
    }],
    transfers: [],
    flights: [],
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">Days</h3>
      {fields.map((field, index) => (
        <div key={field.id} className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Day {index + 1}</h4>
            <Button
              variant="danger"
              onClick={() => remove(index)}
              className="text-sm"
            >
              Remove Day
            </Button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Date</label>
            <Input
              type="date"
              {...control.register(`days.${index}.date`, { valueAsDate: true })}
            />
          </div>
          <ActivityForm dayIndex={index} control={control} />
          <TransferForm dayIndex={index} control={control} />
          <FlightForm dayIndex={index} control={control} />
        </div>
      ))}
      <Button onClick={() => append(defaultDay)} variant="secondary">
        Add Day
      </Button>
    </div>
  );
};