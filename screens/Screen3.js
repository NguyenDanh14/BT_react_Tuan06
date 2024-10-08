import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome for the heart icon

const { width, height } = Dimensions.get('window'); // Get the device dimensions

const Screen3 = ({ route }) => {
  const {
    image,
    title = 'Pina Mountain',
    originalPrice = '$1350',
    discountedPrice = '$449',
    discount = '15% OFF',
    description = 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  } = route.params;

  return (
    <View style={styles.container}>
      {/* Background for the product image */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>

      {/* Product details */}
      <Text style={styles.title}>{title}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.discount}>{discount}</Text>
        <Text style={styles.originalPrice}>{originalPrice}</Text>
        <Text style={styles.discountedPrice}>{discountedPrice}</Text>
      </View>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Action buttons */}
      <View style={styles.actionContainer}>
        <FontAwesome name="heart-o" size={36} color="gray" style={styles.heartIcon} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: width * 0.05, // Dynamic padding based on screen width
  },
  imageContainer: {
    backgroundColor: '#fce7d4', // Soft pinkish background
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Set width to 100% of the screen
    height: width * 0.95, // Set height to maintain a square aspect ratio (adjustable)
    marginBottom: height * 0.02, // Dynamic margin bottom
    borderRadius: 6, // Set border radius to 0 to fill the edges
  },
  image: {
    width: '90%', // Make the image take the full width of the container
    height: '90%', // Make the image take the full height of the container
  },
  title: {
    fontSize: width * 0.07, // 7% of screen width for the title
    fontWeight: 'bold',
    textAlign: 'left', // Align text to the left
    marginBottom: height * 0.01, // Dynamic margin bottom
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align price items to the left
    alignItems: 'center',
    marginBottom: height * 0.01, // Dynamic margin bottom
  },
  discount: {
    fontSize: width * 0.04, // 4% of screen width for discount text
    color: 'red',
    marginRight: 10,
  },
  originalPrice: {
    fontSize: width * 0.04, // 4% of screen width for original price text
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountedPrice: {
    fontSize: width * 0.045, // 4.5% of screen width for discounted price text
    fontWeight: 'bold',
    color: 'black',
  },
  sectionTitle: {
    fontSize: width * 0.05, // 5% of screen width for section title
    fontWeight: 'bold',
    marginTop: height * 0.01, // Dynamic margin top
    marginBottom: height * 0.005, // Dynamic margin bottom
    textAlign: 'left', // Align section title to the left
  },
  description: {
    fontSize: width * 0.04, // 4% of screen width for description text
    color: 'gray',
    marginBottom: height * 0.015, // Dynamic margin bottom
    textAlign: 'left', // Align description text to the left
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02, // Dynamic margin top
  },
  heartIcon: {
    padding: 10,
  },
  addButton: {
    backgroundColor: 'red',
    paddingVertical: height * 0.016, 
    paddingHorizontal: width * 0.22, 
    borderRadius: 30,
  },
  addButtonText: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default Screen3;