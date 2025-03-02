import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Card, Text, useTheme} from 'react-native-paper';
import React from 'react'

const RepositoryDetails = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>--- Repository Details ---</Text>
      <Card style={{paddingVertical: 8}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Card.Cover
            style={{
              borderRadius: 100,
              height: 100,
              width: 100,
              marginVertical: 6,
            }}
            source={{uri: 'https://picsum.photos/700'}}
          />
          <Card.Content style={{textAlign: 'center'}}>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="titleMedium">@Card content</Text>
          </Card.Content>
        </View>
        <Card.Content>
          <Text variant="titleMedium">Repo:-</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Name</Text>
          <Text variant="titleMedium">
            this is my page for the github repos check it out for more projects this is i more text of test the card{' '}
          </Text>
         
        </Card.Content>
        
        <Card.Actions style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 170,
            }}>
        <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 50,
                backgroundColor: 'orange',
              }}></View>
            <Text variant="titleSmall">{'JavaScript'}</Text>
          </View>
          <TouchableOpacity accessibilityRole='link' onPress={() => Linking.openURL('https://reactnative.dev/docs/touchableopacity')} style={{backgroundColor: theme.colors.primary, padding: 10, borderRadius: 18, fontWeight: 'bold'}}><Text style={{color: theme.colors.background}}>Check Out!</Text></TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
  )
}

export default RepositoryDetails

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 600,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 700,
    marginVertical: 20,
  },
});
