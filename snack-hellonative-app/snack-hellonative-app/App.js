import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Button, NativeBaseProvider } from "native-base";


export default function App() {
  const [ count, setCount ] = useState(0); //useState 상태를 사용하여 초기 숫자를 0으로 설정
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>{ count }</Text>
        <Button size="sm" variant="outline"
          onPress={ () => { setCount(count + 1) }}
        >클릭</Button>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: { //mainView라는 이름을 만들어준다.
   flex: 1,
   justifyContent: 'center',
   paddingTop: Constants.statusBarHeight,
   backgroundColor: '#ecf0f1',
   padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});


