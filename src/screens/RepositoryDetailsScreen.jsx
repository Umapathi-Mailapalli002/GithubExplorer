import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Text, useTheme, Appbar, Button, Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const RepositoryDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const langColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    Go: '#00ADD8',
    Rust: '#dea584',
    PHP: '#4F5D95',
    'C#': '#178600',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    EJS: '#a91e50',
  };

  return (
    <>
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <Appbar.Header sty>
          <Appbar.BackAction
            onPress={() => {
              navigation.navigate('Main');
            }}
          />
        </Appbar.Header>
        <Text style={styles.heading}>--- Repository Details ---</Text>
        <Card
          style={{
            paddingVertical: 8,
            shadowColor: theme.colors.onBackground, // Soft shadow
          }}>
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
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 8}}>
            <Chip icon="source-fork">122</Chip> 
            <Chip icon="star-outline" >122</Chip>
            <Chip icon="adjust" >122</Chip>

            </View>
            
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Name</Text>
            <Text variant="titleMedium">
              this is my page for the github repos check it out for more
              projects this is i more text of test the card{' '}
            </Text>
            <View style={{display: 'flex',flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 8}}>
            <Chip >Html</Chip> 
            <Chip >Css</Chip>
            <Chip >Javascript</Chip>

            </View>
          </Card.Content>

          <Card.Actions
            style={{
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
            <TouchableOpacity
              accessibilityRole="link"
              onPress={() =>
                Linking.openURL('https://reactnative.dev/docs/touchableopacity')
              }
              style={{
                backgroundColor: theme.colors.primary,
                padding: 10,
                borderRadius: 18,
                fontWeight: 'bold',
              }}>
              <Text style={{color: theme.colors.background}}>Check Out!</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      </View>
    </>
  );
};

export default RepositoryDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '100%',
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 700,
    marginVertical: 20,
  },
});
