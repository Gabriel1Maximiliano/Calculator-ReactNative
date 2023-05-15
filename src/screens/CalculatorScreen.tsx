/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export const CalculatorScreen = () => {
    const styles = StyleSheet.create({
        text:{
            fontSize:45,
        },
    });
  return (
    <View>
        <Text style={ styles.text } >Calculator Screen implemented</Text>
    </View>
  );
};
