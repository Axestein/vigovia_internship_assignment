import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import type { ItineraryFormData } from '../types/itinerary';

// Register fonts
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
    marginBottom: 20,
    borderBottom: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e40af',
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#1e40af',
  },
  section: {
    marginBottom: 10,
  },
  activity: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottom: 1,
    borderBottomColor: '#e2e8f0',
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  activityName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activityTime: {
    fontSize: 14,
    color: '#4b5563',
  },
  activityDescription: {
    fontSize: 12,
    marginBottom: 5,
    color: '#4b5563',
  },
  activityDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 12,
    color: '#4b5563',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 10,
    textAlign: 'center',
    borderTop: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 10,
    color: '#6b7280',
  },
});

const formatPrice = (price: unknown): string => {
  const num = typeof price === 'number' ? price : parseFloat(String(price));
  return isNaN(num) ? '0.00' : num.toFixed(2);
};

export const ItineraryPDF = ({ data }: { data: ItineraryFormData }) => (
  <Document>
    {data.days.map((day, dayIndex) => (
      <Page key={day.id} size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.tripName}</Text>
          <Text>Day {dayIndex + 1} - {new Date(day.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</Text>
        </View>

        {day.activities.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.dayTitle}>Activities</Text>
            {day.activities.map((activity, index) => (
              <View key={index} style={styles.activity}>
                <View style={styles.activityHeader}>
                  <Text style={styles.activityName}>{activity.name}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
                {activity.description && (
                  <Text style={styles.activityDescription}>{activity.description}</Text>
                )}
                <View style={styles.activityDetails}>
                  <Text>Location: {activity.location}</Text>
                  <Text>Price: ${formatPrice(activity.price)}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {day.transfers.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.dayTitle}>Transfers</Text>
            {day.transfers.map((transfer, index) => (
              <View key={index} style={styles.activity}>
                <View style={styles.activityHeader}>
                  <Text style={styles.activityName}>{transfer.type}</Text>
                  <Text style={styles.activityTime}>{transfer.time}</Text>
                </View>
                <View style={styles.activityDetails}>
                  <Text>Max People: {transfer.maxPeople}</Text>
                  <Text>Price: ${formatPrice(transfer.price)}</Text>
                </View>
                {transfer.notes && (
                  <Text style={styles.activityDescription}>Notes: {transfer.notes}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {day.flights.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.dayTitle}>Flights</Text>
            {day.flights.map((flight, index) => (
              <View key={index} style={styles.activity}>
                <View style={styles.activityHeader}>
                  <Text style={styles.activityName}>
                    {flight.airline} - Flight {flight.number}
                  </Text>
                </View>
                <View style={styles.activityDetails}>
                  <Text>Departure: {flight.departureTime}</Text>
                  <Text>Arrival: {flight.arrivalTime}</Text>
                </View>
                <Text style={styles.activityDescription}>Price: ${formatPrice(flight.price)}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.footer} fixed>
          <Text>{data.companyInfo.name}</Text>
          <Text>
            {data.companyInfo.address} | {data.companyInfo.phone} | {data.companyInfo.email} | {data.companyInfo.website}
          </Text>
        </View>
      </Page>
    ))}
  </Document>
);