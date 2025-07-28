import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function ContactScreen() {
  const handleCall = () => {
    Linking.openURL('tel:+1234567890');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@myfarm.com');
  };

  const handleMap = () => {
    Linking.openURL('https://maps.google.com/?q=123+Farm+Road,+Countryside,+CA+90210');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>Get in touch with our farm</Text>
      
      <View style={styles.contactCard}>
        <Text style={styles.sectionTitle}>📍 Location</Text>
        <Text style={styles.contactText}>123 Serrote Steet</Text>
        <Text style={styles.contactText}>Sitios-Novos, Caucaia, CE</Text>
        <TouchableOpacity style={styles.button} onPress={handleMap}>
          <Text style={styles.buttonText}>Open in Maps</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.sectionTitle}>📞 Phone</Text>
        <Text style={styles.contactText}>(55) 3513-8000</Text>
        <TouchableOpacity style={styles.button} onPress={handleCall}>
          <Text style={styles.buttonText}>Call Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.sectionTitle}>✉️ Email</Text>
        <Text style={styles.contactText}>serrotefazenda4@gmail.com
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleEmail}>
          <Text style={styles.buttonText}>Send Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.sectionTitle}>🕒 Business Hours</Text>
        <Text style={styles.contactText}>Monday - Friday: 8:00 AM - 6:00 PM</Text>
        <Text style={styles.contactText}>Saturday: 9:00 AM - 4:00 PM</Text>
        <Text style={styles.contactText}>Sunday: Closed</Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.sectionTitle}>🚚 Delivery</Text>
        <Text style={styles.contactText}>We offer local delivery within 20 miles</Text>
        <Text style={styles.contactText}>Free delivery for orders over $50</Text>
        <Text style={styles.contactText}>Same-day delivery available</Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.sectionTitle}>🌱 Farm Tours</Text>
        <Text style={styles.contactText}>Guided tours every Saturday</Text>
        <Text style={styles.contactText}>9:00 AM - 2:00 PM</Text>
        <Text style={styles.contactText}>$15 per person</Text>
        <Text style={styles.contactText}>Children under 5: Free</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  contactCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
}); 