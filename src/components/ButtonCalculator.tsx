/* eslint-disable react-native/no-inline-styles */ /* eslint-disable no-trailing-spaces */ /* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  buttonWith?: boolean;
}

export const ButtonCalculator = ({
  text,
  color = '#2D2D2D',
  buttonWith = false,
}: Props) => {
  return (
    <TouchableOpacity>
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
