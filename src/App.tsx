import { useForm } from 'react-hook-form';
import type { ItineraryFormData } from './types/itinerary';
import { DaySection } from './components/DaySection';
import { useItineraryPDF } from './hooks/useItineraryPDF';
import { Input } from './components/UI/Input';
import { Button } from './components/UI/Button';
import Header from './components/Header';
import Footer  from './components/Footer';

const defaultValues: ItineraryFormData = {
  tripName: '',
  duration: 1,
  startDate: new Date(),
  days: [],
  companyInfo: {
    name: 'Travel Adventures Inc.',
    address: '123 Travel St, Vacation City, VC 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@traveladventures.com',
    website: 'www.traveladventures.com',
  },
};

export default function App() {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<ItineraryFormData>({
    defaultValues,
  });
  const { handleGenerate, PreviewModal, showPreview, isGenerating } = useItineraryPDF();

  const onSubmit = async (data: ItineraryFormData) => {
    try {
      // Convert all string numbers to actual numbers
      const processedData: ItineraryFormData = {
        ...data,
        duration: Number(data.duration) || 1,
        days: data.days.map(day => ({
          ...day,
          activities: day.activities.map(activity => ({
            ...activity,
            price: Number(activity.price) || 0,
          })),
          transfers: day.transfers.map(transfer => ({
            ...transfer,
            price: Number(transfer.price) || 0,
            maxPeople: Number(transfer.maxPeople) || 1,
          })),
          flights: day.flights.map(flight => ({
            ...flight,
            price: Number(flight.price) || 0,
          })),
        })),
      };

      if (processedData.days.length === 0) {
        throw new Error('Please add at least one day to your itinerary');
      }

      handleGenerate(processedData);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert(error instanceof Error ? error.message : 'Failed to generate PDF');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Itinerary Generator</h1>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">Trip Name</label>
                <Input
                  {...control.register('tripName', { required: 'Trip name is required' })}
                  placeholder="Summer Vacation 2023"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Duration (days)</label>
                <Input
                  type="number"
                  min="1"
                  {...control.register('duration', { 
                    required: 'Duration is required',
                    valueAsNumber: true,
                    min: { value: 1, message: 'Minimum 1 day' }
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Start Date</label>
                <Input
                  type="date"
                  {...control.register('startDate', { required: 'Start date is required' })}
                />
              </div>
            </div>

            <DaySection control={control} />

            <div className="mt-8 flex justify-center">
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting || isGenerating}
              >
                {isSubmitting || isGenerating ? 'Generating...' : 'Generate Itinerary PDF'}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      {showPreview && <PreviewModal />}
    </div>
  );
}