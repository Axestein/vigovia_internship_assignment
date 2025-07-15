import type { Control } from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { Input } from "./UI/Input";

export const VisaDetailsForm = ({ control }: { control: Control<ItineraryFormData> }) => {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Visa Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Visa Type</label>
          <Input
            {...control.register(`visaDetails.type`)}
            placeholder="Tourist"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Validity</label>
          <Input
            {...control.register(`visaDetails.validity`)}
            placeholder="30 Days"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Processing Date</label>
          <Input
            {...control.register(`visaDetails.processingDate`)}
            placeholder="14/06/2025"
          />
        </div>
      </div>
    </div>
  );
};