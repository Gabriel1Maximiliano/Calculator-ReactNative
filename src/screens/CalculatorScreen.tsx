/* eslint-disable jsx-quotes */ /* eslint-disable no-trailing-spaces */ /* eslint-disable prettier/prettier */


import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {
  const { 
    btnAdd,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubtract,
    changePositiveToNegative,
    clearScreen,makeNumber,number,prevNumber,toCalculate } = useCalculator();
  return (
    <View style={ styles.containerCalculator } >
        {
            ( prevNumber !== '0' ) && <Text style={ styles.smallResult } >{ prevNumber }</Text>
        }
        <Text style={ styles.result } 
        numberOfLines={ 1 }
        adjustsFontSizeToFit
        >{ number }</Text>

        <View style={ styles.row } >
            <ButtonCalculator text='C'color='#9B9B9B' action={ clearScreen }/>
            <ButtonCalculator text='+/-' color='#9B9B9B'action={ changePositiveToNegative }/>
            <ButtonCalculator text='del' color='#9B9B9B' action={ ()=>btnDelete( number ) } />
            <ButtonCalculator text='/' color='#ff8c00'action={ btnDivide }/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='7' action={ ()=>makeNumber('7') } />
            <ButtonCalculator text='8' action={ ()=>makeNumber('8') } />
            <ButtonCalculator text='9' action={ ()=>makeNumber('9') } />
            <ButtonCalculator text='X' action={ btnMultiply } color='#ff8c00'/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='4' action={ ()=>makeNumber('4')}/>
            <ButtonCalculator text='5' action={ ()=>makeNumber('5')}/>
            <ButtonCalculator text='6' action={ ()=>makeNumber('6')}/>
            <ButtonCalculator text='-' color='#ff8c00'action={ btnSubtract }/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='1' action={ ()=>makeNumber('1')}/>
            <ButtonCalculator text='2' action={ ()=>makeNumber('2')}/>
            <ButtonCalculator text='3' action={ ()=>makeNumber('3')}/>
            <ButtonCalculator text='+' color='#ff8c00'action={ btnAdd }/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='0' buttonWith action={ ()=>makeNumber('0')}/>
            <ButtonCalculator text='.' action={ ()=>makeNumber('.')}/>
            <ButtonCalculator text='=' color='#ff8c00'action={ toCalculate }/>
        </View>
       
    </View> 
  );
};
