import type { Control } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const NotesForm = ({ control }: { control: Control<ItineraryFormData> }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "importantNotes",
  });

  const defaultNote = {
    id: Date.now().toString(),
    point: "",
    details: "",
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Important Notes</h4>
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-md mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Point</label>
              <Input
                {...control.register(`importantNotes.${index}.point`, { required: true })}
                placeholder="Alfred Shubach-Raj"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Details</label>
              <Input
                {...control.register(`importantNotes.${index}.details`, { required: true })}
                placeholder="Details..."
              />
            </div>
          </div>
          <Button
            variant="danger"
            onClick={() => remove(index)}
            className="text-sm"
          >
            Remove Note
          </Button>
        </div>
      ))}
      <Button
        onClick={() => append(defaultNote)}
        variant="secondary"
        className="text-sm"
      >
        Add Note
      </Button>
    </div>
  );
};