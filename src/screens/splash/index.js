import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const SplashScreen = () => {
  return (
    <Image source={require('../../assets/splash_image.jpg')} resizeMode="cover">
      <Text style={styles.text}>Inside</Text>
    </Image>
  );
};


export default SplashScreen;
