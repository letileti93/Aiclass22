import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    price: '$3.99/lb',
    description: 'Organic tomatoes',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Corn',
    price: '$2.49/dozen',
    description: 'Fresh picked sweet corn',
    image: 'https://images.unsplash.com/photo-1601593768791-9c2b4c0c0c0c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Oganic Eggs',
    price: '$4.99/dozen',
    description: 'Farm fresh organic eggs',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Watermelon',
    price: '$8.99/jar',
    description: 'Organic local Watermelon',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    name: 'Fresh Lettuce',
    price: '$2.99/head',
    description: 'Crisp, fresh lettuce',
    image: 'https://images.unsplash.com/photo-1622205313162-be1d5716a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    name: 'Strawberries',
    price: '$5.99/pint',
    description: 'Sweet, juicy strawberries',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80'
  }
];

export default function ProductsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Our Farm Products</Text>
      <Text style={styles.subtitle}>Fresh from our fields to your table</Text>
      
      {products.map((product) => (
        <View key={product.id} style={styles.productCard}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Order Now</Text>
            </TouchableOpacity>
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
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  orderButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
}); 