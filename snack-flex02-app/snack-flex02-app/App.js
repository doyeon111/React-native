import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text</Text>
      <Text>Text</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#000000',
    borderWidth: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    //alignItems: 'center' //자기 자신의 크기만큼 나타남
  },
  text: {
    borderColor: '#000000',
    borderWidth: 1,
    textAlign: 'center'
  }
});
