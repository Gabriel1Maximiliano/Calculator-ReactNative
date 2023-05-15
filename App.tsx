/* eslint-disable prettier/prettier */
import React from 'react';

import { View,StyleSheet } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';

export const App = () => {



  const styles = StyleSheet.create({
    text: {
      display: 'flex',
    },
  });
  return (
    <View style={ styles.text } >
      <CalculatorScreen />
    </View>
  );
};
