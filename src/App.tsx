import { useForm } from 'react-hook-form';
import type { ItineraryFormData } from './types/itinerary';
import { DaySection } from './components/DaySection';
import { FlightForm } from './components/FlightForm';
import { HotelForm } from './components/HotelForm';
import { NotesForm } from './components/NotesForm';
import { ServicesForm } from './components/ServicesForm';
import { ActivityTableForm } from './components/ActivityTableForm';
import { PaymentPlanForm } from './components/PaymentPlanForm';
import { VisaDetailsForm } from './components/VisaDetialsForm';
import { useItineraryPDF } from './hooks/useItineraryPDF';
import { Input } from './components/UI/Input';
import { Button } from './components/UI/Button';
import Header  from './components/Header';
import Footer  from './components/Footer';
import { MapPin, Calendar, Users, Plane, FileText, Loader2 } from 'lucide-react';

const defaultValues: ItineraryFormData = {
  travelerName: 'Rahul',
  duration: 6,
  departureFrom: 'Kolkata',
  destination: 'Singapore',
  startDate: new Date('2025-06-09'),
  endDate: new Date('2025-06-15'),
  days: [
    {
      id: '1',
      date: new Date('2025-06-09'),
      activities: [
        {
          id: '1',
          name: 'Arrive in Singapore: Transfer From Airport To Hotel',
          time: '09:00',
          timeSlot: 'morning',
        },
        {
          id: '2',
          name: 'Check in Your Hotel',
          time: '14:00',
          timeSlot: 'afternoon',
        },
        {
          id: '3',
          name: 'Visit Marina Bay/Sands Sky Park (2-3 Hours)',
          time: '15:00',
          timeSlot: 'afternoon',
        },
        {
          id: '4',
          name: 'Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)',
          time: '18:00',
          timeSlot: 'evening',
        }
      ]
    }
  ],
  transfers: [],
  flights: [
    {
      id: '1',
      date: new Date('2025-06-09'),
      airline: 'Air India',
      from: 'Delhi',
      fromCode: 'DEL',
      to: 'Singapore',
      toCode: 'SIN',
    }
  ],
  hotelBookings: [
    {
      id: '1',
      city: 'Singapore',
      checkIn: new Date('2025-06-09'),
      checkOut: new Date('2025-06-15'),
      nights: 6,
      hotelName: 'Super Townhouse Sale and a Terminal Site to Serve and',
    }
  ],
  importantNotes: [
    {
      id: '1',
      point: 'Alfred Shubach-Raj',
      details: 'In Case of our Republic, was born on Friday from General Mr. Campbell Centre for Reimbursement Pay Office.',
    }
  ],
  services: [
    {
      id: '1',
      name: 'RTI Tobacco and Home Products',
      details: 'Deferred Complained All Payment',
    }
  ],
  activityTable: [
    {
      id: '1',
      city: 'Rio Rio Jumbo',
      activity: 'Sydney Hollow/ Coke & Tungyo Zoo',
      type: 'Hotspot/Syjamming',
      duration: '2-3 Hours'
    }
  ],
  paymentPlan: {
    totalAmount: '₹ 9.00,000 For 3 Pink (Inclusive Of CSST)',
    tcs: 'Not Collected',
    installments: [
      {
        name: 'Installment 1',
        amount: '18,500,000',
        dueDate: 'Initial Payment'
      },
      {
        name: 'Installment 2',
        amount: '16,000,000',
        dueDate: 'Post Visa Append'
      },
      {
        name: 'Installment 3',
        amount: 'Remaining',
        dueDate: '28 Days Before Donation'
      }
    ]
  },
  visaDetails: {
    type: 'Tourist',
    validity: '30 Days',
    processingDate: '14/06/2025'
  },
  termsAndConditions: [
    'At Nokia for Tertiary and Our Religious Visit Bank, it is possible to add up an invitation.',
    'At Nokia the UK of Japan Shipping.',
    'A recent movement of all people across Sweden institutes.',
  ],
  companyInfo: {
    name: 'Vigovia Tech Pvt. Ltd',
    address: 'Hei 103 Cinnabar Hills, Little Business Park, Kamalaka, India',
    phone: '+91 35239999999',
    email: 'Cornad@Vigovia.Com',
  },
};

export default function App() {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<ItineraryFormData>({
    defaultValues,
  });
  const { handleGenerate, PreviewModal, showPreview, isGenerating } = useItineraryPDF();

  const onSubmit = async (data: ItineraryFormData) => {
    try {
      if (data.days.length === 0) {
        throw new Error('Please add at least one day to your itinerary');
      }
      handleGenerate(data);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert(error instanceof Error ? error.message : 'Failed to generate PDF');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FBF4FF] via-white to-[#F8F0FF]">
      <Header />
      
      <div className="flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#541C9C] to-[#680099] rounded-full mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Create Your Perfect 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#541C9C] to-[#680099]"> Itinerary</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Design a comprehensive travel plan with all the details you need for an unforgettable journey
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#541C9C] to-[#680099] px-8 py-6">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Plane className="w-6 h-6" />
                Trip Details
              </h2>
              <p className="text-[#936FE0] mt-2">Fill in your travel information to get started</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8">
              {/* BIS */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#541C9C] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Basic Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#541C9C]" />
                      Traveler Name
                    </label>
                    <div className="relative">
                      <Input
                        {...control.register('travelerName', { required: 'Traveler name is required' })}
                        placeholder="Enter traveler name"
                        className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#541C9C] focus:ring-2 focus:ring-[#541C9C]/20 transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#541C9C]" />
                      Duration (days)
                    </label>
                    <Input
                      type="number"
                      min="1"
                      {...control.register('duration', { 
                        required: 'Duration is required',
                        valueAsNumber: true,
                        min: { value: 1, message: 'Minimum 1 day' }
                      })}
                      className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#541C9C] focus:ring-2 focus:ring-[#541C9C]/20 transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#541C9C]" />
                      Departure From
                    </label>
                    <Input
                      {...control.register('departureFrom', { required: 'Departure city is required' })}
                      placeholder="Enter departure city"
                      className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#541C9C] focus:ring-2 focus:ring-[#541C9C]/20 transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#541C9C]" />
                      Destination
                    </label>
                    <Input
                      {...control.register('destination', { required: 'Destination is required' })}
                      placeholder="Enter destination"
                      className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#541C9C] focus:ring-2 focus:ring-[#541C9C]/20 transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#541C9C]" />
                      Start Date
                    </label>
                    <Input
                      type="date"
                      {...control.register('startDate', { required: 'Start date is required', valueAsDate: true })}
                      className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#541C9C] focus:ring-2 focus:ring-[#541C9C]/20 transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#541C9C]" />
                      End Date
                    </label>
                    <Input
                      type="date"
                      {...control.register('endDate', { required: 'End date is required', valueAsDate: true })}
                      className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#541C9C] focus:ring-2 focus:ring-[#541C9C]/20 transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-[#FBF4FF] to-white rounded-xl p-6 border border-[#936FE0]/20">
                  <FlightForm control={control} />
                </div>

                <div className="bg-gradient-to-r from-white to-[#FBF4FF] rounded-xl p-6 border border-[#936FE0]/20">
                  <HotelForm control={control} />
                </div>

                <div className="bg-gradient-to-r from-[#FBF4FF] to-white rounded-xl p-6 border border-[#936FE0]/20">
                  <DaySection control={control} />
                </div>

                <div className="bg-gradient-to-r from-white to-[#FBF4FF] rounded-xl p-6 border border-[#936FE0]/20">
                  <ActivityTableForm control={control} />
                </div>

                <div className="bg-gradient-to-r from-[#FBF4FF] to-white rounded-xl p-6 border border-[#936FE0]/20">
                  <NotesForm control={control} />
                </div>

                <div className="bg-gradient-to-r from-white to-[#FBF4FF] rounded-xl p-6 border border-[#936FE0]/20">
                  <ServicesForm control={control} />
                </div>

                <div className="bg-gradient-to-r from-[#FBF4FF] to-white rounded-xl p-6 border border-[#936FE0]/20">
                  <PaymentPlanForm control={control} />
                </div>

                <div className="bg-gradient-to-r from-white to-[#FBF4FF] rounded-xl p-6 border border-[#936FE0]/20">
                  <VisaDetailsForm control={control} />
                </div>
              </div>

              <div className="mt-8 flex justify-center">
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-[#541C9C] to-[#680099] hover:from-[#680099] hover:to-[#541C9C] text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center"
                disabled={isSubmitting || isGenerating}
              >
                {isSubmitting || isGenerating ? 'Generating...' : 'Generate Itinerary PDF'}
              </Button>
            </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
      {showPreview && <PreviewModal />}
    </div>
  );
}