import type { Control } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const ServicesForm = ({ control }: { control: Control<ItineraryFormData> }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

  const defaultService = {
    id: Date.now().toString(),
    name: "",
    details: "",
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Scope of Services</h4>
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-md mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Service</label>
              <Input
                {...control.register(`services.${index}.name`, { required: true })}
                placeholder="RTI Tobacco and Home Products"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Details</label>
              <Input
                {...control.register(`services.${index}.details`, { required: true })}
                placeholder="Deferred Complained All Payment"
              />
            </div>
          </div>
          <Button
            variant="danger"
            onClick={() => remove(index)}
            className="text-sm"
          >
            Remove Service
          </Button>
        </div>
      ))}
      <Button
        onClick={() => append(defaultService)}
        variant="secondary"
        className="text-sm"
      >
        Add Service
      </Button>
    </div>
  );
};