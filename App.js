import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Head} from './src/Head'
import {String} from './src/String'

export default function App() {
  const addString = title => {
    setValue1(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };
 return (
    <View>
      <Head title="Калькулятор"></Head>
      <View style={styles.bodystyle}>
      <String />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodystyle: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
