import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Text, useTheme, Appbar, Button, Chip} from 'react-native-paper';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { formatUpdatedTime } from '../utils/timeFormate';
const RepositoryDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const router = useRoute()
  const {state} = router.params || {};
  console.log(state)
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
              source={{uri: state?.owner?.avatar_url || 'https://avatars.githubusercontent.com/u/146647639?v=4'}}
            />
            <Card.Content style={{textAlign: 'center'}}>
              <Text variant="titleMedium">@{state?.owner?.login}</Text>
            </Card.Content>
          </View>
          <Card.Content>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <Text variant="titleMedium">Repo:-</Text>
            <Text variant="titleMedium">{formatUpdatedTime('Created at', state?.created_at)}</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 8}}>
            <Chip icon="source-fork">{state?.forks_count}</Chip> 
            <Chip icon="star-outline" >{state?.stargazers_count}</Chip>
            <Chip icon="adjust" >{state?.open_issues_count}</Chip>

            </View>
            
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{state?.name}</Text>
            <Text variant="titleMedium">
              {state?.description}
            </Text>
            <View style={{display: 'flex',flexWrap: 'wrap', flexDirection: 'row',gap: 10, marginVertical: 8}}>
            {state?.topics && state.topics.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}

            </View>
          </Card.Content>

          <Card.Actions
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                position: 'absolute',
                left: 0
              }}>
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 50,
                  backgroundColor: langColors[state?.language] || 'orange',
                }}></View>
              <Text variant="titleSmall">{state?.language}</Text>
            </View>
            <TouchableOpacity
              accessibilityRole="link"
              onPress={() =>
                Linking.openURL(state?.html_url)
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
