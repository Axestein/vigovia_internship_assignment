import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import type { ItineraryFormData } from '../types/itinerary';

Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.cdnfonts.com/css/helvetica-2' },
    { src: 'https://fonts.cdnfonts.com/css/helvetica-2', fontWeight: 'bold' },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottom: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 10,
  },
  logo: {
    width: 120,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailsColumn: {
    width: '48%',
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabel: {
    width: 120,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
  },
  detailValue: {
    fontSize: 12,
    color: '#333',
  },
  divider: {
    borderBottom: 1,
    borderBottomColor: '#e2e8f0',
    marginVertical: 15,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  timeSlot: {
    marginBottom: 10,
  },
  timeLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  activity: {
    fontSize: 12,
    color: '#333',
    marginLeft: 10,
    marginBottom: 3,
  },
  flightSection: {
    marginBottom: 15,
  },
  flightDate: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  flightDetail: {
    fontSize: 12,
    marginLeft: 10,
  },
  hotelTable: {
    width: '100%',
    marginBottom: 15,
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    padding: 5,
  },
  tableCell: {
    fontSize: 10,
    padding: 3,
    flex: 1,
  },
  notesSection: {
    marginBottom: 15,
  },
  notesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noteItem: {
    fontSize: 10,
    marginBottom: 3,
  },
  servicesSection: {
    marginBottom: 15,
  },
  paymentPlanSection: {
    marginBottom: 15,
  },
  paymentPlanRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  paymentPlanLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    width: '40%',
  },
  paymentPlanValue: {
    fontSize: 12,
    width: '60%',
  },
  visaDetails: {
    marginBottom: 15,
  },
  bookNowButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    borderRadius: 4,
  },
  termsLink: {
    fontSize: 12,
    color: '#3b82f6',
    textDecoration: 'underline',
    marginBottom: 10,
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialMediaText: {
    fontSize: 10,
    color: '#666',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  footerDivider: {
    borderTop: 1,
    borderTopColor: '#e2e8f0',
    marginTop: 5,
    paddingTop: 5,
  },
});

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const formatShortDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    year: '2-digit' 
  }).replace(',', '');
};

export const ItineraryPDF = ({ data }: { data: ItineraryFormData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image src="/logo.png" style={styles.logo} />
        <View>
          <Text style={styles.title}>{data.destination} Itinerary</Text>
          <Text style={styles.subtitle}>{data.duration} Days {data.duration - 1} Nights</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={{ fontSize: 14, marginBottom: 10 }}>Hi, {data.travelerName}!</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trip Details</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsColumn}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Departure From:</Text>
              <Text style={styles.detailValue}>{data.departureFrom}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Departure:</Text>
              <Text style={styles.detailValue}>{formatDate(data.startDate)}</Text>
            </View>
          </View>
          <View style={styles.detailsColumn}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Arrival:</Text>
              <Text style={styles.detailValue}>{formatDate(data.endDate)}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Destination:</Text>
              <Text style={styles.detailValue}>{data.destination}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Flight Summary</Text>
        {data.flights.map((flight, index) => (
          <View key={index} style={styles.flightSection}>
            <Text style={styles.flightDate}>
              {formatShortDate(flight.date)}
            </Text>
            <Text style={styles.flightDetail}>
              Fly {flight.airline} from {flight.from} ({flight.fromCode}) To {flight.to} ({flight.toCode})
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hotel Bookings</Text>
        <View style={styles.hotelTable}>
          <View style={{...styles.tableRow, ...styles.tableHeader}}>
            <Text style={styles.tableCell}>City</Text>
            <Text style={styles.tableCell}>Check In</Text>
            <Text style={styles.tableCell}>Check Out</Text>
            <Text style={styles.tableCell}>Nights</Text>
            <Text style={styles.tableCell}>Hotel Name</Text>
          </View>
          {data.hotelBookings.map((hotel, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{hotel.city}</Text>
              <Text style={styles.tableCell}>{formatDate(hotel.checkIn)}</Text>
              <Text style={styles.tableCell}>{formatDate(hotel.checkOut)}</Text>
              <Text style={styles.tableCell}>{hotel.nights}</Text>
              <Text style={styles.tableCell}>{hotel.hotelName}</Text>
            </View>
          ))}
        </View>
      </View>

      {data.days.map((day, dayIndex) => (
        <View key={day.id} style={styles.section}>
          <Text style={styles.dayTitle}>{formatDate(day.date)}</Text>
          
          {day.activities.filter(a => a.timeSlot === 'morning').length > 0 && (
            <View style={styles.timeSlot}>
              <Text style={styles.timeLabel}>Morning</Text>
              {day.activities
                .filter(a => a.timeSlot === 'morning')
                .map((activity, index) => (
                  <Text key={index} style={styles.activity}>• {activity.name}</Text>
              ))}
            </View>
          )}

          {day.activities.filter(a => a.timeSlot === 'afternoon').length > 0 && (
            <View style={styles.timeSlot}>
              <Text style={styles.timeLabel}>Afternoon</Text>
              {day.activities
                .filter(a => a.timeSlot === 'afternoon')
                .map((activity, index) => (
                  <Text key={index} style={styles.activity}>• {activity.name}</Text>
              ))}
            </View>
          )}

          {day.activities.filter(a => a.timeSlot === 'evening').length > 0 && (
            <View style={styles.timeSlot}>
              <Text style={styles.timeLabel}>Evening</Text>
              {day.activities
                .filter(a => a.timeSlot === 'evening')
                .map((activity, index) => (
                  <Text key={index} style={styles.activity}>• {activity.name}</Text>
              ))}
            </View>
          )}
        </View>
      ))}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activity Table</Text>
        <View style={styles.hotelTable}>
          <View style={{...styles.tableRow, ...styles.tableHeader}}>
            <Text style={styles.tableCell}>City</Text>
            <Text style={styles.tableCell}>Activity</Text>
            <Text style={styles.tableCell}>Type</Text>
            <Text style={styles.tableCell}>Duration</Text>
          </View>
          {data.activityTable.map((activity, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{activity.city}</Text>
              <Text style={styles.tableCell}>{activity.activity}</Text>
              <Text style={styles.tableCell}>{activity.type}</Text>
              <Text style={styles.tableCell}>{activity.duration}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Terms and Conditions</Text>
        <Text style={styles.termsLink}>View all terms and conditions</Text>
        <View style={styles.socialMedia}>
          <Text style={styles.socialMediaText}>vigovia </Text>
          <Text style={{...styles.socialMediaText, color: '#3b82f6'}}>Facebook.com</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Plan</Text>
        <View style={styles.paymentPlanSection}>
          <View style={styles.paymentPlanRow}>
            <Text style={styles.paymentPlanLabel}>Total Amount</Text>
            <Text style={styles.paymentPlanValue}>{data.paymentPlan.totalAmount}</Text>
          </View>
          <View style={styles.paymentPlanRow}>
            <Text style={styles.paymentPlanLabel}>TCS</Text>
            <Text style={styles.paymentPlanValue}>{data.paymentPlan.tcs}</Text>
          </View>
        </View>
        
        {data.paymentPlan.installments.map((installment, index) => (
          <View key={index} style={styles.paymentPlanSection}>
            <Text style={styles.paymentPlanLabel}>{installment.name}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.paymentPlanValue}>{installment.amount}</Text>
              <Text style={styles.paymentPlanValue}>{installment.dueDate}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Visa Details</Text>
        <View style={styles.visaDetails}>
          <View style={styles.paymentPlanRow}>
            <Text style={styles.paymentPlanLabel}>Visa Type:</Text>
            <Text style={styles.paymentPlanValue}>{data.visaDetails.type}</Text>
          </View>
          <View style={styles.paymentPlanRow}>
            <Text style={styles.paymentPlanLabel}>Validity:</Text>
            <Text style={styles.paymentPlanValue}>{data.visaDetails.validity}</Text>
          </View>
          <View style={styles.paymentPlanRow}>
            <Text style={styles.paymentPlanLabel}>Processing Date:</Text>
            <Text style={styles.paymentPlanValue}>{data.visaDetails.processingDate}</Text>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={styles.bookNowButton}>PLAN.PACK.GO!</Text>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>Book Now</Text>
      </View>

      <View style={styles.footer}>
        <Text>{data.companyInfo.name}</Text>
        <Text>Registered Office: {data.companyInfo.address}</Text>
        <View style={styles.footerDivider}>
          <Text>Phone: {data.companyInfo.phone} | Email ID: {data.companyInfo.email}</Text>
        </View>
      </View>
    </Page>
  </Document>
);