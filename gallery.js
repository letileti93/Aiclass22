import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const galleryImages = [
  {
    id: 1,
    title: 'Our Farm',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Fresh Vegetables and Fuits',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Farm Animals',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694e30?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Greenhouse',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Harvest Time',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'
  },
 
];

export default function GalleryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Farm Gallery</Text>
      <Text style={styles.subtitle}>Take a tour of our beautiful farm</Text>
      
      <View style={styles.galleryGrid}>
        {galleryImages.map((item) => (
          <View key={item.id} style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.galleryImage} />
            <Text style={styles.imageTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Visit Our Farm</Text>
        <Text style={styles.infoText}>
          Come see where your food is grown! We offer guided tours every Saturday from 9 AM to 2 PM.
        </Text>
        <Text style={styles.infoText}>
          Book your visit by calling us or sending us a message through the Contact page.
        </Text>
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
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: (width - 48) / 2,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  galleryImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  imageTitle: {
    padding: 12,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 12,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
}); 