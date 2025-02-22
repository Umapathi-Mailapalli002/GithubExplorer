import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

const ListCard = () => (
  <Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    left={(props) => <Avatar.Image size={50} source={{uri: 'https://avatars.githubusercontent.com/u/146647639?v=4'}} />}
  />
);

export default ListCard;