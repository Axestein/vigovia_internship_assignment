import type { Control } from "react-hook-form";
import {useFieldArray} from "react-hook-form";
import type { ItineraryFormData } from "../types/itinerary";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

export const PaymentPlanForm = ({ control }: { control: Control<ItineraryFormData> }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "paymentPlan.installments",
  });

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">Payment Plan</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Total Amount</label>
          <Input
            {...control.register(`paymentPlan.totalAmount`)}
            placeholder="₹ 9.00,000 For 3 Pink (Inclusive Of CSST)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">TCS</label>
          <Input
            {...control.register(`paymentPlan.tcs`)}
            placeholder="Not Collected"
          />
        </div>
      </div>

      <h5 className="font-medium mb-2">Installments</h5>
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-md mb-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                {...control.register(`paymentPlan.installments.${index}.name`)}
                placeholder="Installment 1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Amount</label>
              <Input
                {...control.register(`paymentPlan.installments.${index}.amount`)}
                placeholder="18,500,000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Due Date</label>
              <Input
                {...control.register(`paymentPlan.installments.${index}.dueDate`)}
                placeholder="Initial Payment"
              />
            </div>
          </div>
          <Button
            variant="danger"
            onClick={() => remove(index)}
            className="text-sm"
          >
            Remove Installment
          </Button>
        </div>
      ))}
      <Button
        onClick={() => append({ name: '', amount: '', dueDate: '' })}
        variant="secondary"
        className="text-sm"
      >
        Add Installment
      </Button>
    </div>
  );
};