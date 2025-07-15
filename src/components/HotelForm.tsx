import type { Control } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const HotelForm = ({ control }: { control: Control<ItineraryFormData> }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "hotelBookings",
  });

  const defaultHotel = {
    id: Date.now().toString(),
    city: "",
    checkIn: new Date(),
    checkOut: new Date(),
    nights: 1,
    hotelName: "",
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Hotel Bookings</h4>
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-md mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <Input
                {...control.register(`hotelBookings.${index}.city`, { required: true })}
                placeholder="Singapore"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hotel Name</label>
              <Input
                {...control.register(`hotelBookings.${index}.hotelName`, { required: true })}
                placeholder="Hotel Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Check In</label>
              <Input
                type="date"
                {...control.register(`hotelBookings.${index}.checkIn`, { valueAsDate: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Check Out</label>
              <Input
                type="date"
                {...control.register(`hotelBookings.${index}.checkOut`, { valueAsDate: true })}
              />
            </div>
          </div>
          <Button
            variant="danger"
            onClick={() => remove(index)}
            className="text-sm"
          >
            Remove Hotel
          </Button>
        </div>
      ))}
      <Button
        onClick={() => append(defaultHotel)}
        variant="secondary"
        className="text-sm"
      >
        Add Hotel
      </Button>
    </div>
  );
};