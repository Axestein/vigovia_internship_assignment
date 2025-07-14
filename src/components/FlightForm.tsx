import type { Control } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const FlightForm = ({
  dayIndex,
  control,
}: {
  dayIndex: number;
  control: Control<ItineraryFormData>;
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `days.${dayIndex}.flights`,
  });

  const defaultFlight = {
    id: "",
    airline: "",
    number: "",
    departureTime: "",
    arrivalTime: "",
    price: 0,
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Flights</h4>
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-md mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Airline</label>
              <Input
                {...control.register(`days.${dayIndex}.flights.${index}.airline`)}
                placeholder="Delta, Emirates, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Flight Number</label>
              <Input
                {...control.register(`days.${dayIndex}.flights.${index}.number`)}
                placeholder="DL123"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Departure Time</label>
              <Input
                type="datetime-local"
                {...control.register(`days.${dayIndex}.flights.${index}.departureTime`)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Arrival Time</label>
              <Input
                type="datetime-local"
                {...control.register(`days.${dayIndex}.flights.${index}.arrivalTime`)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price ($)</label>
              <Input
                type="number"
                {...control.register(`days.${dayIndex}.flights.${index}.price`)}
              />
            </div>
          </div>
          <Button
            variant="danger"
            onClick={() => remove(index)}
            className="text-sm"
          >
            Remove Flight
          </Button>
        </div>
      ))}
      <Button
        onClick={() => append(defaultFlight)}
        variant="secondary"
        className="text-sm"
      >
        Add Flight
      </Button>
    </div>
  );
};