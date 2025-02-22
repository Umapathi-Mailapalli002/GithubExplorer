import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const ListCard = () => {
      const theme = useTheme()
    
 return <Card.Title style={{backgroundColor: theme.colors.background}}
    title="Card Title"
    titleStyle={{fontWeight:800, fontSize: 22,}}
    subtitle="Card Subtitle"
    subtitleStyle={{fontWeight:500, fontSize: 17,}}
    left={(props) => <Avatar.Image size={50} source={{uri: 'https://avatars.githubusercontent.com/u/146647639?v=4'}} />}
  />
};

export default ListCard;