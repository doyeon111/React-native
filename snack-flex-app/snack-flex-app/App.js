import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Header, Contents, Footer } from './components/Layout';
import { viewStyles, textStyle } from './src/Styles'; //외부 스타일에 해당되는 부분



export default function App() {
  return (
    <View style={viewStyles.container}>
      <Header />
      <Contents />
      <Footer />
    </View>
  );
}

