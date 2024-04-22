import { View, Text } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from '../styles/style';

const Loader = () => {
  return (
    <ActivityIndicator
      style={{ top: '50%', position: 'absolute', alignSelf: 'center' }}
      size={100}
      color={colors.color1}
    />
  );
};

export default Loader;
