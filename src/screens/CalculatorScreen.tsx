/* eslint-disable jsx-quotes */ /* eslint-disable no-trailing-spaces */ /* eslint-disable prettier/prettier */


import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalculator } from '../components/ButtonCalculator';

enum MathematicalOperations {
    add, subtract, multiply, divide
}
export const CalculatorScreen = () => {
    
   const [ number, setNumber ] = useState('100');
   const [ prevNumber, setPrevNumber ] = useState('0');
   const mathematicalOperationsRef = useRef<MathematicalOperations>();

   const clearScreen = () =>{
    setNumber('0');
    setPrevNumber( '0' );
   };

   const makeNumber = ( stringNumber:string ) =>{
    // Verify decimal ponit 
    if ( number.includes('.') && stringNumber === '.' ) {
        return;
    }
    setNumber( number + stringNumber );

    if ( number.startsWith('0') || number.startsWith('-0') ){
        // decimal point
         if ( stringNumber === '.'  ){
            setNumber( number + stringNumber );
        } else if ( stringNumber === '0' && number.includes('.') ){
            // Check if there is other zero and point

            setNumber( number + stringNumber );
       
         } else if ( number.includes('0') && !number.includes('.') ){
            // if equal to zero, and there is a point
            setNumber( stringNumber ); 
            
         } else if ( stringNumber !== '0' && stringNumber.includes('.') ) {
            // Avoid 0.000
            setNumber( number );
         } else {
            setNumber( number +  stringNumber );
         }
    }
   };

   const changePositiveToNegative = ()=>{
    if ( number.includes('-') ){
        setNumber( number.replace('-','') );

    } else {
        setNumber( '-' + number );
    }
   };

    const btnDelete = ( numberString: string ) =>{

        if ( numberString.length === 1  ) {
            setNumber( '0' );
        } else if ( numberString.length === 2 && numberString[0] === '-' ){
            setNumber( '0' );
        } else {
            setNumber( numberString.slice(0,-1) );
        }
    
    };

    const prevNumberToDisplay = () =>{
        if ( number.endsWith('.') ){
            setPrevNumber( number.slice(0,-1) );
            setNumber( '0' );
        } else {
            setPrevNumber( number );
            setNumber( '0' );
        }
    };

    const btnAdd = () =>{
        prevNumberToDisplay();
        mathematicalOperationsRef.current = MathematicalOperations.add;
    };
    const btnSubtract = () =>{
        prevNumberToDisplay();
        mathematicalOperationsRef.current = MathematicalOperations.add;


    };    
    const btnMultiply = () =>{
        prevNumberToDisplay();
        mathematicalOperationsRef.current = MathematicalOperations.add;
    };
    const btnDivide = () =>{
        prevNumberToDisplay();
        mathematicalOperationsRef.current = MathematicalOperations.add;
    };
    
  return (
    <View style={ styles.containerCalculator } >
        <Text style={ styles.smallResult } >{ prevNumber }</Text>
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
            <ButtonCalculator text='=' color='#ff8c00'/>
        </View>
       
    </View> 
  );
};
