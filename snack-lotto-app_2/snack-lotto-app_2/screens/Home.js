import React, { useCallback } from 'react';
import { Button, ScrollView, View, FlatList, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';

// const screenList = [
//   { key: 'LottoGenerator', title: '로또 번호 생성기', link: 'LottoGenerator' },
//   { key: 'ClockDigital', title: '디지털 시계', link: 'ClockDigital' },
// ] //FlatList는 데이터 형식으로 불러옴

const screenList = [
  { id: 1, title: '로또 번호 생성기', link: 'LottoGenerator' },
  { id: 2, title: '디지털 시계', link: 'ClockDigital' },
] // 외부데이터인 앞의 값이 키 값이 아닌 아이디를 가져올 경우


const LinkItem = styled.View`
  padding: 20px 12px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  background-color: #00FF00; 
`;

function Home( { navigation } ) {
  const renderItem = useCallback( ( { item } ) => { //useCallback 함수를 사용했기 때문에 기억을 하고 있게된다.
    return (
      <Pressable onPress= { () => { //버튼과 다르게 클릭만 하면 됨
        navigation.navigate( item.link );
      }}>
        <LinkItem>
          <Text>{ item.title }</Text>
        </LinkItem>
      </Pressable>
    )
  }, []);

  return (
    <>
     <FlatList
        data={screenList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

export default Home;