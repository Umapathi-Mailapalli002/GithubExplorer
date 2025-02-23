import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, IconButton} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

const ListCard = () => {
  const theme = useTheme();

  return (
    <View style={styles.card}>
      <Card.Title
        mode="elevated"
        style={{backgroundColor: theme.colors.background, borderWidth: 1, borderRadius: 10, elevation: 5}}
        title="Card Title"
        titleStyle={{fontWeight: 800, fontSize: 22}}
        subtitle="Card Subtitle"
        subtitleStyle={{fontWeight: 500, fontSize: 17}}
        left={props => (
          <Avatar.Image
            size={50}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/146647639?v=4',
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxHeight: 75,
    
  },
});
export default ListCard;
