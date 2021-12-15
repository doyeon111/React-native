import React, { useState } from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from 'styled-components/native';

let numbers = []; //numbers 라는 배열을 생성
_.times(45, n => numbers.push( n + 1 )); //lodash를 사용하여 총 45개의 numbers를 생성
//numbers = _.shuffle( numbers ); //shuffle(섞어서) 다시 저장

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    padding-top: ${Constants.statusBarHeight}px;
    align-items: center
`;

const Row = styled.View`
    flex-direction: row;
    margin-bottom: 24;
`;

const Ball = styled.View`
    width: 50px;
    height: 50px;
    background: ${ props => {
      if ( props.value < 11 ) { //만약 공의 숫자가 11보다 작다면
          return '#e5e251'; //색깔이 달라짐
      } else if ( props.value < 21 ) { //21보다 작다면
          return '#517FE5';
      } else if ( props.value < 31 ) { //31보다 작다면
          return '#E54036';
      } else if ( props.value < 41 ) { //41보다 작다면
          return '#e5e5e5';
      } else { 
          return '#47BF74';        
      }
    }};
    //background-color: '#e5e5e5';
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`;

const Label = styled.Text`
    border-color: "#000000";
    font-size: 20px;
    font-weight: bold;
`; 

export default function App() {
  const [ displayNumbers, setNumbers ] = React.useState(_.shuffle( numbers )); //위에 import에 굳이 useState를 써주지 않아도 사용할 수 있는 방법
  return (
    <Container>
      <Row>
        <Ball value={ displayNumbers[0] }>
          <Label>{ displayNumbers[0] }</Label>
        </Ball>
        <Ball value={ displayNumbers[1] }>
          <Label>{ displayNumbers[1] }</Label>
        </Ball>
        <Ball value={ displayNumbers[2] }>
          <Label>{ displayNumbers[2] }</Label>
        </Ball>
        <Ball value={ displayNumbers[3] }>
          <Label>{ displayNumbers[3] }</Label>
        </Ball>
        <Ball value={ displayNumbers[4] }>
          <Label>{ displayNumbers[4] }</Label>
        </Ball>
        <Ball value={ displayNumbers[5] }>
          <Label>{ displayNumbers[5] }</Label>
        </Ball>
      </Row>
      <Button title="다시하기" onPress={ () => setNumbers(_.shuffle( numbers )) } />
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, //기본 값이기 때문에 수직으로 나타남(컬럼이기 때문)
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     alignItems: 'center'
//   },
//   row: {
//     flexDirection: 'row', //가로로 배치
//     marginBottom: 24 //숫자 아랫 부분의 간격
//   },
//   ball: { //숫자의 테두리
//     width: 50,
//     height: 50,
//     backgroundColor:  '#e5e5e5',
//     borderRadius: 25, //배경을 동그랗게 표현
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     borderColor: '#000000',
//     fontSize: 20,
//     fontWeight: 'bold' //폰트 진하게
//   }

// });
