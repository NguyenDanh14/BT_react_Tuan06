import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/image.png')} style={styles.image} />
      </View>
      <Text style={styles.subtitle}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginBottom: 20,
    width: '100%', 
  },
  imageContainer: {
    backgroundColor: '#FDE8E8',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  image: {
    width: 292,
    height: 270,
  },
  subtitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 30,
    width: 200,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen1;