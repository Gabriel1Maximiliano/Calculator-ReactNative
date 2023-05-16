/* eslint-disable jsx-quotes */ /* eslint-disable no-trailing-spaces */ /* eslint-disable prettier/prettier */


import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalculator } from '../components/ButtonCalculator';

export const CalculatorScreen = () => {
    
   const [ number, setNumber ] = useState('100');
   const [ prevNumber, setPrevNumber ] = useState('0');

   const clearScreen = () =>{
    setNumber('0');
   };

   const makeNumber = ( stringNumber:string ) =>{
    setNumber( number + stringNumber );
   };
    
  return (
    <View style={ styles.containerCalculator } >
        <Text style={ styles.smallResult } >{ number }</Text>
        <Text style={ styles.result } 
        numberOfLines={ 1 }
        adjustsFontSizeToFit
        >{ number }</Text>

        <View style={ styles.row } >
            <ButtonCalculator text='C'color='#9B9B9B' action={ clearScreen }/>
            <ButtonCalculator text='+/-' color='#9B9B9B'/>
            <ButtonCalculator text='del' color='#9B9B9B'/>
            <ButtonCalculator text='/' color='#ff8c00'/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='7' action={ ()=>makeNumber('7') } />
            <ButtonCalculator text='8' action={ ()=>makeNumber('8') } />
            <ButtonCalculator text='9' action={ ()=>makeNumber('9') } />
            <ButtonCalculator text='X' action={ ()=>makeNumber('X') } color='#ff8c00'/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='4' action={ ()=>makeNumber('4')}/>
            <ButtonCalculator text='5' action={ ()=>makeNumber('5')}/>
            <ButtonCalculator text='6' action={ ()=>makeNumber('6')}/>
            <ButtonCalculator text='-' color='#ff8c00'action={ ()=>makeNumber('-')}/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='1' action={ ()=>makeNumber('1')}/>
            <ButtonCalculator text='2' action={ ()=>makeNumber('2')}/>
            <ButtonCalculator text='3' action={ ()=>makeNumber('3')}/>
            <ButtonCalculator text='+' color='#ff8c00'/>
        </View>

        <View style={ styles.row } >
            <ButtonCalculator text='0' buttonWith action={ ()=>makeNumber('1')}/>
            <ButtonCalculator text='.' action={ ()=>makeNumber('1')}/>
            <ButtonCalculator text='=' color='#ff8c00'/>
        </View>
       
    </View> 
  );
};
