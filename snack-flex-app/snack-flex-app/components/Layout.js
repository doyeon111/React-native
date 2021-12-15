import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Header = () => { //헤더 부분의 스타일
  return (
    <View style={[styles.container, styles.header]}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export const Contents = () => { //중간 부분의 스타일
  return (
    <View style={[styles.container, styles.contents]}>
      <Text style={styles.text}>Contents</Text>
    </View>
  );
};

export const Footer = () => { //footer 부분의 스타일
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({ //내부 스타일 지정
  container: { //3가지 전부 통틀어서 해당됨.
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  header: {
    backgroundColor: '#f1c40f'
  },
  contents: {
    flex: 1,
    backgroundColor: '#1abc9c',
    height: 640
  },
  footer: {
    backgroundColor: '#3498db'
  },
  text: {
    fontSize: 26
  }
});