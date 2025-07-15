import type { Control } from "react-hook-form";
import { useFieldArray} from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const FlightForm = ({ control }: { control: Control<ItineraryFormData> }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "flights",
  });

  const defaultFlight = {
    id: Date.now().toString(),
    date: new Date(),
    airline: "",
    from: "",
    fromCode: "",
    to: "",
    toCode: "",
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Flight Details</h4>
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-md mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <Input
                type="date"
                {...control.register(`flights.${index}.date`, { valueAsDate: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Airline</label>
              <Input
                {...control.register(`flights.${index}.airline`, { required: true })}
                placeholder="Air India"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">From (City)</label>
              <Input
                {...control.register(`flights.${index}.from`, { required: true })}
                placeholder="Delhi"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">From (Code)</label>
              <Input
                {...control.register(`flights.${index}.fromCode`, { required: true })}
                placeholder="DEL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">To (City)</label>
              <Input
                {...control.register(`flights.${index}.to`, { required: true })}
                placeholder="Singapore"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">To (Code)</label>
              <Input
                {...control.register(`flights.${index}.toCode`, { required: true })}
                placeholder="SIN"
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