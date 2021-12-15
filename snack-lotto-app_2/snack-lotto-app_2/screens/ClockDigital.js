import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { DateTime } from 'luxon';
import Container from '../components/Container';
import Row from '../components/Row';

const TimeText = styled.Text`
  font-size: 64px;
  font-weight: bold;
  background: rgba( 255, 255, 255, 0.5 );
`; //시간 텍스트에 대한 컴포넌트

const Second = styled.Text`
  font-size: 30px;
  font-weight: bold;
  background: rgba( 255, 255, 255, 0.5 );
  marginTop: 12px; 
`; //초에 대한 컴포넌트

const image = { uri: "https://placeimg.com/1280/1280/nature" }; //이미지 가져오기

function ClockDigital() {
  const [ date, setDate ] = useState(DateTime.now());

  useEffect( () => {
    const id = setInterval( () => {
      setDate( DateTime.now() );
    }, 1000 );  //1초마다 바뀔때 마다 한 번씩 실행하기
    return () => clearInterval( id ); //id 값 반환
  }, []);

  return (
      <Container source={image} resizeMode="stretch">
        <Row>
          <TimeText>{ date.toFormat( 'HH:mm' )}</TimeText>
        </Row>
        <Row>
          <Second>{ date.toFormat( 'ss' )}</Second>
        </Row>
      </Container>
  );
}


export default ClockDigital; //외부로 내보내기




