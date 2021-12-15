import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native'; //모듈에 클래스를 추가
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.mainView}>
      <View>
        <Text style={styles.text}>Hello World</Text>
      </View>
      <View>
        <Text>Hello World</Text>
      </View>
      <View>
        <Text>Hello World</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: { //mainView라는 이름을 만들어준다.
    backgroundColor: 'green',
    height: '100%',
    marginTop: 50, //위에서부터 50정도 
    //paddingTop: 50, //시간과 배터리 나와있는 부분까지 모두 녹색으로 변함
    alignItems: 'center', //가로 가운데
    justifyContent: 'center' //세로 가운데
  },
  text: {
    color: "#FFFF00",
    fontSize: 28,
  }
});

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center', //가로 가운데 배치
//     justifyContent: 'center' //수직 가운데 배치
//   }
// })
