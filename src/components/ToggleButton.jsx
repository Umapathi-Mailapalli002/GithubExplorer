import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Switch, useTheme, Text } from 'react-native-paper';

const ToggleButton = ({onToggleSwitch, isDarkMode}) => {
    const theme = useTheme()
  return (
    <View
      style={{
        height: 70,
        borderBottomWidth: .5,
        borderColor: theme.colors.onBackground,
        display: 'flex',
        paddingHorizontal: 15,
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <Text mode="contain" style={{fontWeight: 700}}>
        {isDarkMode ? <Icon name="moon" size={30} color={'white'}/> : <Icon name='sun' size={30} color={'black'}/>}
      </Text>
      <Switch value={isDarkMode} onValueChange={onToggleSwitch} />
    </View>
  );
};

export default ToggleButton;
