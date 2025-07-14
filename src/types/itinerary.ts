export interface Activity {
  id: string;
  name: string;
  description: string;
  time: string;
  price: number;
  location: string;
}

export interface Transfer {
  id: string;
  type: string;
  time: string;
  price: number;
  maxPeople: number;
  notes: string;
}

export interface Flight {
  id: string;
  airline: string;
  number: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

export interface Day {
  id: string;
  date: Date;
  activities: Activity[];
  transfers: Transfer[];
  flights: Flight[];
}

export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

export interface ItineraryFormData {
  tripName: string;
  duration: number;
  startDate: Date;
  days: Day[];
  companyInfo: CompanyInfo;
}