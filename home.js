import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const features = [
  {
    key: 'welcome',
    title: 'Welcome',
    description: 'Discover our fresh, locally grown products straight from our farm to your table.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    icon: 'home',
  },
  {
    key: 'aboutus',
    title: 'About Us',
    description: 'Learn about our story, mission, and sustainable practices at Serrote Farm.',
    image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80',
    icon: 'information-circle',
  },
  {
    key: 'schooltrip',
    title: 'School Trip',
    description: 'Explore our educational farm tours for schools and groups. Hands-on learning for all ages.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    icon: 'school',
  },
  {
    key: 'moreinfo',
    title: 'More Info',
    description: 'Find out about farm events, volunteering, seasonal highlights, and community partnerships.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    icon: 'ellipsis-horizontal',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Serrote Farm</Text>
      <Text style={styles.subheader}>Welcome! Explore our farm as a guest visitor.</Text>
      {features.map((feature) => (
        <View key={feature.key} style={styles.card}>
          <ImageBackground
            source={{ uri: feature.image }}
            style={styles.cardImage}
            imageStyle={{ borderRadius: 18 }}
            resizeMode="cover"
          >
            <View style={styles.cardOverlay} />
            <View style={styles.iconCircle}>
              <Ionicons name={feature.icon} size={28} color="#fff" />
            </View>
          </ImageBackground>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardDesc}>{feature.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 18,
    paddingBottom: 32,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 2,
    letterSpacing: 1.1,
  },
  subheader: {
    fontSize: 16,
    color: '#388e3c',
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 170,
    justifyContent: 'flex-end',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.18)',
    borderRadius: 18,
  },
  iconCircle: {
    position: 'absolute',
    top: 18,
    left: 18,
    backgroundColor: 'rgba(56,142,60,0.92)',
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  cardContent: {
    padding: 18,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  cardDesc: {
    fontSize: 15,
    color: '#444',
    marginBottom: 14,
    lineHeight: 21,
  },
}); 