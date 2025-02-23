import React, {useState} from 'react';
import {View} from 'react-native';
import { Switch, useTheme, Text } from 'react-native-paper';

const ToggleButton = ({onToggleSwitch, isDarkMode}) => {
    const theme = useTheme()
  return (
    <View
      style={{
        height: 50,
        display: 'flex',
        paddingHorizontal: 15,
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <Text mode="contain" style={{fontWeight: 700}}>
        {isDarkMode ? 'Dark Mode Activated' : 'Light Mode Activated'}
      </Text>
      <Switch value={isDarkMode} onValueChange={onToggleSwitch} />
    </View>
  );
};

export default ToggleButton;
