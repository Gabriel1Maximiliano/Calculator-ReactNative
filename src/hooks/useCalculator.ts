/* eslint-disable prettier/prettier */

import { useState, useRef } from 'react';

enum MathematicalOperations {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const mathematicalOperationsRef = useRef<MathematicalOperations>();

  const clearScreen = () => {
    setIsPressed(false);
    setNumber('0');
    setPrevNumber('0');
  };

  const makeNumber = (stringNumber: string) => {
    if (number.includes('.') && stringNumber === '.') {
      return;
    }
    setNumber(number + stringNumber);

    if (number.startsWith('0') || number.startsWith('-0')) {
      // decimal point
      if (stringNumber === '.') {
        setNumber(number + stringNumber);
      } else if (stringNumber === '0' && number.includes('.')) {
        // Check if there is other zero and point
        setNumber(number + stringNumber);
      } else if (number.includes('0') && !number.includes('.')) {
        // if equal to zero, and there is a point
        setNumber(stringNumber);
      } else if (stringNumber !== '0' && stringNumber.includes('.')) {
        // Avoid 0.000
        setNumber(number);
      } else {
        setNumber(number + stringNumber);
      }
    }
  };

  const changePositiveToNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };
  const btnDelete = (numberString: string) => {
    if (numberString.length === 1) {
      setNumber('0');
    } else if (numberString.length === 2 && numberString[0] === '-') {
      setNumber('0');
    } else {
      setNumber(numberString.slice(0, -1));
    }
  };

  const prevNumberToDisplay = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
      setNumber('0');
    } else {
      setPrevNumber(number);
      setNumber('0');
    }
  };

  const btnAdd = () => {
    prevNumberToDisplay();
    mathematicalOperationsRef.current = MathematicalOperations.add;
  };
  const btnSubtract = () => {
    prevNumberToDisplay();
    mathematicalOperationsRef.current = MathematicalOperations.subtract;
  };

  const btnMultiply = () => {
    prevNumberToDisplay();
    mathematicalOperationsRef.current = MathematicalOperations.multiply;
  };
  const btnDivide = () => {
    prevNumberToDisplay();
    mathematicalOperationsRef.current = MathematicalOperations.divide;
  };
  const toCalculate = () => {
    let result;
    const firstNumber = Number(number);
    const secondNumber = Number(prevNumber);
    switch (mathematicalOperationsRef.current) {
      case MathematicalOperations.add:
        result = firstNumber + secondNumber;
        setNumber(`${result}`);
        setPrevNumber('0');
        break;
      case MathematicalOperations.subtract:
        result = secondNumber - firstNumber;
        setNumber(`${result}`);
        setPrevNumber('0');
        break;
      case MathematicalOperations.multiply:
        result = firstNumber * secondNumber;
        setNumber(`${result}`);
        setPrevNumber('0');
        break;
      case MathematicalOperations.divide:
        if (firstNumber === 0) {
          console.log('entre al if de dividir');
          setNumber('Error, no se puede dividir entre cero');
          result = null;
          setIsPressed(true);
          break;
        } else if (!isPressed || firstNumber) {
          result = secondNumber / firstNumber;
          setNumber(`${result}`);
          setPrevNumber('0');
          setIsPressed(true);
        }

        break;
      default:
        break;
    }
  };
  return {
    //variables
    number,
    prevNumber,
    //Methods
    btnAdd,
    btnSubtract,
    btnMultiply,
    btnDivide,
    toCalculate,
    btnDelete,
    changePositiveToNegative,
    makeNumber,
    clearScreen,
  };
};
