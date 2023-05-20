/* eslint-disable react-native/no-inline-styles */ /* eslint-disable no-trailing-spaces */ /* eslint-disable prettier/prettier */
import React from 'react';
//import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  buttonWith?: boolean;
  action?: ((stringNumber: string) => void) | undefined;
}

export const ButtonCalculator = ({
  text,
  color = '#2D2D2D',
  buttonWith = false,
  action,
}: Props) => {

// const [ timesPressed, setTimesPressed ] = useState<number>(0);

// const isPressed = () =>{

//   setTimesPressed( prev => prev + 1 );

//  if ( timesPressed === 1 ){

//    action;
//  } else {
//   return;
//  }

// };

  return (
    <TouchableOpacity
   
    onPress={  action ? ()=>action( text = '' ) : undefined }>
        <View
        style={{
            ...styles.button,
            backgroundColor: color,
            width: buttonWith ? 180 : 80,
        }}>
        <Text
            style={{
            ...styles.textButton,
            color: color === '#2D2D2D' ? 'white' : 'black',
            }}>
            {text}
        </Text>
        </View>
    </TouchableOpacity>
  );
};
