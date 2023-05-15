/* eslint-disable jsx-quotes */ /* eslint-disable no-trailing-spaces */ /* eslint-disable prettier/prettier */


import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalculator } from '../components/ButtonCalculator';

export const CalculatorScreen = () => {
    
   
    
  return (
    <View style={ styles.containerCalculator } >
        <Text style={ styles.smallResult } >1500.00</Text>
        <Text style={ styles.result } 
        numberOfLines={ 1 }
        adjustsFontSizeToFit
        >1500.00</Text>

        <View style={ styles.row } >
            <ButtonCalculator text='C'color='#9B9B9B' />
            <ButtonCalculator text='+/-' color='#9B9B9B'/>
            <ButtonCalculator text='del' color='#9B9B9B'/>
            <ButtonCalculator text='/' color='#ff8c00'/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='7' />
            <ButtonCalculator text='8' />
            <ButtonCalculator text='9' />
            <ButtonCalculator text='X' color='#ff8c00'/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='4' />
            <ButtonCalculator text='5' />
            <ButtonCalculator text='6' />
            <ButtonCalculator text='-' color='#ff8c00'/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='1' />
            <ButtonCalculator text='2' />
            <ButtonCalculator text='3' />
            <ButtonCalculator text='+' color='#ff8c00'/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='0' buttonWith/>
            <ButtonCalculator text='.' />
            <ButtonCalculator text='=' color='#ff8c00'/>
        </View>
       
    </View> 
  );
};
