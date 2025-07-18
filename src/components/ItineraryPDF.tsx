import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import type { ItineraryFormData } from '../types/itinerary';

// Register fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.cdnfonts.com/css/helvetica-2' },
    { src: 'https://fonts.cdnfonts.com/css/helvetica-2', fontWeight: 'bold' },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFFFFF',
  },
  // Logo at top center
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 40,
  },
  // Header with gradient
  headerBox: {
    backgroundColor: '#541C9C',
    backgroundImage: 'linear-gradient(to right, #541C9C, #680099)',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    color: 'white',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planPack: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 5,
  },
  greeting: {
    fontSize: 14,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.9,
    color: '#FFFFFF',
  },
  // Summary Box with subtle gradient
  summaryBox: {
    backgroundColor: '#F8F9FA',
    backgroundImage: 'linear-gradient(to right, #F8F9FA, #FFFFFF)',
    padding: 20,
    borderRadius: 8,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  summaryItem: {
    width: '30%',
    marginBottom: 15,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 3,
  },
  summaryValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 20,
  },
  // Day Section with accent border
  daySection: {
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#541C9C',
  },
  dayDate: {
    fontSize: 14,
    color: '#666666',
  },
  dayDescription: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  timeSlot: {
    marginBottom: 15,
  },
  timeLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#541C9C',
    marginBottom: 8,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  activityContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  activityImageContainer: {
    width: 120,
    marginRight: 15,
  },
  activityImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    objectFit: 'cover',
  },
  imageCaption: {
    fontSize: 10,
    color: '#666666',
    textAlign: 'center',
    marginTop: 5,
  },
  activityContent: {
    flex: 1,
    paddingTop: 5,
  },
  activityItem: {
    marginBottom: 10,
    position: 'relative',
    paddingLeft: 15,
  },
  activityDot: {
    position: 'absolute',
    left: 0,
    top: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#541C9C',
  },
  activityText: {
    fontSize: 12,
    color: '#333333',
    lineHeight: 1.4,
  },
  activityDuration: {
    fontSize: 10,
    color: '#666666',
    fontStyle: 'italic',
  },
  optionalBadge: {
    fontSize: 10,
    color: '#666666',
    fontStyle: 'italic',
    marginLeft: 5,
  },
  // Flight Section
  flightSection: {
    marginBottom: 20,
  },
  flightHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#541C9C',
    marginBottom: 10,
  },
  flightItem: {
    marginBottom: 15,
  },
  flightDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 3,
  },
  flightDetail: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 3,
  },
  flightNote: {
    fontSize: 10,
    color: '#666666',
    fontStyle: 'italic',
    marginTop: 10,
  },
  // Hotel Section with table
  hotelSection: {
    marginBottom: 20,
  },
  hotelHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#541C9C',
    marginBottom: 10,
  },
  hotelTable: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#541C9C',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 8,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 10,
    color: '#333333',
  },
  hotelNotes: {
    fontSize: 10,
    color: '#666666',
    marginTop: 10,
    marginBottom: 5,
  },
  // Payment Plan Section
  paymentSection: {
    marginBottom: 20,
  },
  paymentHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#541C9C',
    marginBottom: 10,
  },
  paymentTable: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  paymentHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#541C9C',
  },
  paymentRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  paymentHeaderCell: {
    flex: 1,
    padding: 8,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  paymentCell: {
    flex: 1,
    padding: 8,
    fontSize: 10,
    color: '#333333',
  },
  // Visa Details Section
  visaSection: {
    marginBottom: 20,
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  visaHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#541C9C',
    marginBottom: 10,
  },
  visaItem: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 5,
  },
  // Terms and Conditions
  termsSection: {
    marginBottom: 20,
  },
  termsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#541C9C',
    marginBottom: 10,
  },
  termItem: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 5,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: '#666666',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  bookNowSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  bookNowButton: {
    backgroundColor: '#541C9C',
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

// Helper functions for date formatting
const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    year: '2-digit' 
  };
  return new Date(date).toLocaleDateString('en-US', options).replace(',', '');
};

const formatDayDate = (date: Date) => {
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString('en-US', { month: 'long' });
  return `${day}${getOrdinalSuffix(day)} ${month}`;
};

const getOrdinalSuffix = (day: number) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

// Hardcoded data matching the design exactly
const hardcodedData: ItineraryFormData = {
  travelerName: 'Rahul',
  duration: 6,
  departureFrom: 'Kolkata',
  destination: 'Singapore',
  startDate: new Date('2025-06-09'),
  endDate: new Date('2025-06-15'),
  travelers: 4,
  days: [
    {
      id: '1',
      date: new Date('2025-06-09'),
      description: 'Arrival in Singapore & City Exploration',
      activities: [
        {
          id: '1',
          name: 'Arrive in Singapore. Transfer From Airport To Hotel.',
          description: 'Private transfer from Changi Airport to your hotel',
          timeSlot: 'morning',
          duration: '1 hour',
          location: 'Changi Airport to Hotel',
          optional: false,
          image: '/gardens.jpg'
        },
        {
          id: '2',
          name: 'Check Into Your Hotel.',
          description: 'Check-in at Marina Bay Sands',
          timeSlot: 'afternoon',
          duration: '30 mins',
          location: 'Marina Bay Sands',
          optional: false,
          image: '/hotel.jpg'
        },
        {
          id: '3',
          name: 'Visit Marina Bay Sands Sky Park (2-3 Hours)',
          description: 'Enjoy panoramic views of Singapore from the observation deck',
          timeSlot: 'afternoon',
          duration: '2-3 hours',
          location: 'Marina Bay Sands SkyPark',
          optional: false,
          image: '/marina-bey.jpg'
        },
        {
          id: '4',
          name: 'Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge',
          description: 'Leisurely walk with beautiful city views',
          timeSlot: 'evening',
          duration: '1 hour',
          location: 'Marina Bay',
          optional: true,
          image: '/marina-bey.jpg'
        },
        {
          id: '5',
          name: 'Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)',
          description: 'Visit the famous Supertree Grove and Cloud Forest',
          timeSlot: 'evening',
          duration: '3-4 hours',
          location: 'Gardens by the Bay',
          optional: false,
          image: '/gardens.jpg'
        }
      ]
    },
    {
      id: '2',
      date: new Date('2025-06-10'),
      description: 'Sentosa Island Adventure',
      activities: [
        {
          id: '6',
          name: 'Universal Studios Singapore',
          description: 'Full day at the theme park',
          timeSlot: 'morning',
          duration: '6-8 hours',
          location: 'Sentosa Island',
          optional: false,
          image: '/hotel.jpg'
        },
        {
          id: '7',
          name: 'S.E.A. Aquarium',
          description: 'Explore one of the largest aquariums in the world',
          timeSlot: 'afternoon',
          duration: '2-3 hours',
          location: 'Sentosa Island',
          optional: true,
          image: '/hotel.jpg'
        },
        {
          id: '8',
          name: 'Wings of Time Night Show',
          description: 'Spectacular light and water show',
          timeSlot: 'evening',
          duration: '1 hour',
          location: 'Sentosa Island',
          optional: false,
          image: '/marina-bey.jpg'
        }
      ]
    }
  ],
  flights: [
    {
      id: '1',
      date: new Date('2025-06-09'),
      airline: 'Air India',
      from: 'Delhi (DEL)',
      fromCode: 'DEL',
      to: 'Singapore (SIN)',
      toCode: 'SIN',
      departureTime: '08:00 AM',
      arrivalTime: '02:30 PM',
      flightNumber: 'AI 381'
    },
    {
      id: '2',
      date: new Date('2025-06-09'),
      airline: 'Air India',
      from: 'Delhi (DEL)',
      fromCode: 'DEL',
      to: 'Singapore (SIN)',
      toCode: 'SIN',
      departureTime: '08:00 AM',
      arrivalTime: '02:30 PM',
      flightNumber: 'AI 381'
    },
    {
      id: '3',
      date: new Date('2025-06-09'),
      airline: 'Air India',
      from: 'Delhi (DEL)',
      fromCode: 'DEL',
      to: 'Singapore (SIN)',
      toCode: 'SIN',
      departureTime: '08:00 AM',
      arrivalTime: '02:30 PM',
      flightNumber: 'AI 381'
    }
  ],
  hotelBookings: [
    {
      id: '1',
      city: 'Singapore',
      checkIn: new Date('2025-02-24'),
      checkOut: new Date('2025-02-26'),
      nights: 2,
      hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond'
    },
    {
      id: '2',
      city: 'Singapore',
      checkIn: new Date('2025-02-24'),
      checkOut: new Date('2025-02-26'),
      nights: 2,
      hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond'
    },
    {
      id: '3',
      city: 'Singapore',
      checkIn: new Date('2025-02-24'),
      checkOut: new Date('2025-02-26'),
      nights: 2,
      hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond'
    }
  ],
  paymentPlan: [
    {
      id: '1',
      date: new Date('2025-03-01'),
      amount: '₹50,000',
      description: 'Initial Booking Amount',
      status: 'Paid'
    },
    {
      id: '2',
      date: new Date('2025-04-15'),
      amount: '₹75,000',
      description: 'Second Installment',
      status: 'Pending'
    },
    {
      id: '3',
      date: new Date('2025-05-20'),
      amount: '₹75,000',
      description: 'Final Payment',
      status: 'Pending'
    }
  ],
  visaDetails: [
    'Singapore Visa required for Indian passport holders',
    'Visa processing time: 3-5 working days',
    'Documents required: Passport, Photos, Bank Statements, Flight Itinerary',
    'Visa fee: ₹2,500 per person'
  ],
  termsAndConditions: [
    'Cancellation before 30 days: 25% of total amount will be charged',
    'Cancellation between 15-30 days: 50% of total amount will be charged',
    'Cancellation within 15 days: 100% of total amount will be charged',
    'No refund for no-shows or unused services',
    'All prices are subject to change without prior notice',
    'Visa approval is subject to embassy discretion'
  ],
  companyInfo: {
    name: 'Vigovia Tech Pvt. Ltd',
    address: 'Hd-109 Clinabar Hills, Links Business Park, Karnataka, India',
    phone: '+91-99X9999999',
    email: 'Contact@Vigovia.Com'
  }
};

export const ItineraryPDF = () => (
  <Document>
    {/* Page 1 - Cover and Itinerary Days */}
    <Page size="A4" style={styles.page}>
      {/* Logo at top center */}
      <View style={styles.logoContainer}>
        <Image src="/logo.png" style={styles.logo} />
      </View>

      {/* Header with Gradient */}
      <View style={styles.headerBox}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.planPack}>PLAN PACK 60</Text>
            <Text style={styles.greeting}>Hi, {hardcodedData.travelerName}!</Text>
            <Text style={styles.title}>{hardcodedData.destination} Itinerary</Text>
            <Text style={styles.subtitle}>{hardcodedData.duration} Days {hardcodedData.duration - 1} Nights</Text>
          </View>
        </View>
      </View>

      {/* Summary Box */}
      <View style={styles.summaryBox}>
        <View style={styles.summaryGrid}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Departure From</Text>
            <Text style={styles.summaryValue}>{hardcodedData.departureFrom}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Departure</Text>
            <Text style={styles.summaryValue}>{formatDate(hardcodedData.startDate)}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Arrival</Text>
            <Text style={styles.summaryValue}>{formatDate(hardcodedData.endDate)}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Destination</Text>
            <Text style={styles.summaryValue}>{hardcodedData.destination}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>No. Of Travellers</Text>
            <Text style={styles.summaryValue}>{hardcodedData.travelers}</Text>
          </View>
        </View>
      </View>

      {/* Daily Itinerary */}
      {hardcodedData.days.map((day) => (
        <View key={day.id} style={styles.daySection}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayTitle}>Day {day.id}</Text>
            <Text style={styles.dayDate}>{formatDayDate(day.date)}</Text>
          </View>
          <Text style={styles.dayDescription}>{day.description}</Text>

          {/* Morning Activities */}
          {day.activities.filter(a => a.timeSlot === 'morning').length > 0 && (
            <View style={styles.timeSlot}>
              <Text style={styles.timeLabel}>Morning</Text>
              {day.activities
                .filter(a => a.timeSlot === 'morning')
                .map((activity) => (
                  <View key={activity.id} style={styles.activityContainer}>
                    {activity.image && (
                      <View style={styles.activityImageContainer}>
                        <Image src={activity.image} style={styles.activityImage} />
                        <Text style={styles.imageCaption}>{activity.location}</Text>
                      </View>
                    )}
                    <View style={styles.activityContent}>
                      <View style={styles.activityItem}>
                        <View style={styles.activityDot} />
                        <Text style={styles.activityText}>• {activity.name}</Text>
                        <Text style={styles.activityText}>{activity.description}</Text>
                        <Text style={styles.activityDuration}>({activity.duration})</Text>
                      </View>
                    </View>
                  </View>
                ))}
            </View>
          )}

          {/* Afternoon Activities */}
          {day.activities.filter(a => a.timeSlot === 'afternoon').length > 0 && (
            <View style={styles.timeSlot}>
              <Text style={styles.timeLabel}>Afternoon</Text>
              {day.activities
                .filter(a => a.timeSlot === 'afternoon')
                .map((activity) => (
                  <View key={activity.id} style={styles.activityContainer}>
                    {activity.image && (
                      <View style={styles.activityImageContainer}>
                        <Image src={activity.image} style={styles.activityImage} />
                        <Text style={styles.imageCaption}>{activity.location}</Text>
                      </View>
                    )}
                    <View style={styles.activityContent}>
                      <View style={styles.activityItem}>
                        <View style={styles.activityDot} />
                        <Text style={styles.activityText}>• {activity.name}</Text>
                        <Text style={styles.activityText}>{activity.description}</Text>
                        <Text style={styles.activityDuration}>({activity.duration})</Text>
                        {activity.optional && (
                          <Text style={styles.optionalBadge}>Optional</Text>
                        )}
                      </View>
                    </View>
                  </View>
                ))}
            </View>
          )}

          {/* Evening Activities */}
          {day.activities.filter(a => a.timeSlot === 'evening').length > 0 && (
            <View style={styles.timeSlot}>
              <Text style={styles.timeLabel}>Evening</Text>
              {day.activities
                .filter(a => a.timeSlot === 'evening')
                .map((activity) => (
                  <View key={activity.id} style={styles.activityContainer}>
                    {activity.image && (
                      <View style={styles.activityImageContainer}>
                        <Image src={activity.image} style={styles.activityImage} />
                        <Text style={styles.imageCaption}>{activity.location}</Text>
                      </View>
                    )}
                    <View style={styles.activityContent}>
                      <View style={styles.activityItem}>
                        <View style={styles.activityDot} />
                        <Text style={styles.activityText}>• {activity.name}</Text>
                        <Text style={styles.activityText}>{activity.description}</Text>
                        <Text style={styles.activityDuration}>({activity.duration})</Text>
                        {activity.optional && (
                          <Text style={styles.optionalBadge}>Optional</Text>
                        )}
                      </View>
                    </View>
                  </View>
                ))}
            </View>
          )}
        </View>
      ))}

      <View style={styles.footer}>
        <Text>{hardcodedData.companyInfo.name}</Text>
      </View>
    </Page>

    {/* Page 2 - Flight, Hotel, Payment, Visa, and Terms */}
    <Page size="A4" style={styles.page}>
      {/* Flight Summary */}
      <View style={styles.flightSection}>
        <Text style={styles.flightHeader}>Flight Summary</Text>
        {hardcodedData.flights.map((flight, index) => (
          <View key={index} style={styles.flightItem}>
            <Text style={styles.flightDate}>{formatDate(flight.date)}</Text>
            <Text style={styles.flightDetail}>Fly {flight.airline} from {flight.from} to {flight.to}</Text>
          </View>
        ))}
        <Text style={styles.flightNote}>
          Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25kg Checked Baggage.
        </Text>
      </View>

      {/* Hotel Bookings */}
      <View style={styles.hotelSection}>
        <Text style={styles.hotelHeader}>Hotel Bookings</Text>
        <View style={styles.hotelTable}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.tableHeaderCell}>City</Text>
            <Text style={styles.tableHeaderCell}>Check In</Text>
            <Text style={styles.tableHeaderCell}>Check Out</Text>
            <Text style={styles.tableHeaderCell}>Nights</Text>
            <Text style={styles.tableHeaderCell}>Hotel Name</Text>
          </View>
          {hardcodedData.hotelBookings.map((hotel, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{hotel.city}</Text>
              <Text style={styles.tableCell}>{hotel.checkIn.toLocaleDateString('en-GB')}</Text>
              <Text style={styles.tableCell}>{hotel.checkOut.toLocaleDateString('en-GB')}</Text>
              <Text style={styles.tableCell}>{hotel.nights}</Text>
              <Text style={styles.tableCell}>{hotel.hotelName}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.hotelNotes}>1. All Hotels Are Tentative And Can Be Replaced With Similar.</Text>
        <Text style={styles.hotelNotes}>2. Breakfast Included For All Hotel Stays.</Text>
        <Text style={styles.hotelNotes}>3. All Hotels Will Be 4* And Above Category</Text>
        <Text style={styles.hotelNotes}>4. A maximum occupancy of 2 people/room is allowed in most hotels.</Text>
      </View>

      {/* Payment Plan */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentHeader}>Payment Plan</Text>
        <View style={styles.paymentTable}>
          <View style={styles.paymentHeaderRow}>
            <Text style={styles.paymentHeaderCell}>Date</Text>
            <Text style={styles.paymentHeaderCell}>Amount</Text>
            <Text style={styles.paymentHeaderCell}>Description</Text>
            <Text style={styles.paymentHeaderCell}>Status</Text>
          </View>
          {hardcodedData.paymentPlan.map((payment, index) => (
            <View key={index} style={styles.paymentRow}>
              <Text style={styles.paymentCell}>{formatDate(payment.date)}</Text>
              <Text style={styles.paymentCell}>{payment.amount}</Text>
              <Text style={styles.paymentCell}>{payment.description}</Text>
              <Text style={styles.paymentCell}>{payment.status}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Visa Details */}
      <View style={styles.visaSection}>
        <Text style={styles.visaHeader}>Visa Details</Text>
        {hardcodedData.visaDetails.map((detail, index) => (
          <Text key={index} style={styles.visaItem}>• {detail}</Text>
        ))}
      </View>

      {/* Terms and Conditions */}
      <View style={styles.termsSection}>
        <Text style={styles.termsHeader}>Terms and Conditions</Text>
        {hardcodedData.termsAndConditions.map((term, index) => (
          <Text key={index} style={styles.termItem}>• {term}</Text>
        ))}
      </View>

      <View style={styles.bookNowSection}>
        <Text style={styles.bookNowButton}>PLAN.PACK.GO!</Text>
      </View>

      <View style={styles.footer}>
        <Text>{hardcodedData.companyInfo.name}</Text>
        <Text>Registered Office: {hardcodedData.companyInfo.address}</Text>
        <Text>Phone: {hardcodedData.companyInfo.phone} | Email: {hardcodedData.companyInfo.email}</Text>
      </View>
    </Page>
  </Document>
);