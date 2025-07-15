export interface Activity {
  id: string;
  name: string;
  description?: string;
  time: string;
  timeSlot: 'morning' | 'afternoon' | 'evening';
  price?: number;
  location?: string;
}

export interface Transfer {
  id: string;
  type: string;
  time: string;
  price: number;
  maxPeople: number;
  notes?: string;
}

export interface Flight {
  id: string;
  date: Date;
  airline: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
}

export interface HotelBooking {
  id: string;
  city: string;
  checkIn: Date;
  checkOut: Date;
  nights: number;
  hotelName: string;
}

export interface ImportantNote {
  id: string;
  point: string;
  details: string;
}

export interface Service {
  id: string;
  name: string;
  details: string;
}

export interface Day {
  id: string;
  date: Date;
  activities: Activity[];
}

export interface ActivityItem {
  id: string;
  city: string;
  activity: string;
  type: string;
  duration: string;
}

export interface PaymentPlan {
  totalAmount: string;
  tcs: string;
  installments: {
    name: string;
    amount: string;
    dueDate: string;
  }[];
}

export interface VisaDetails {
  type: string;
  validity: string;
  processingDate: string;
}


export interface ItineraryFormData {
  travelerName: string;
  duration: number;
  departureFrom: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  days: Day[];
  transfers: Transfer[];
  flights: Flight[];
  hotelBookings: HotelBooking[];
  importantNotes: ImportantNote[];
  services: Service[];
  termsAndConditions: string[];
  activityTable: ActivityItem[];
  paymentPlan: PaymentPlan;
  visaDetails: VisaDetails;
  companyInfo: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
}