import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton, Text, useTheme } from "react-native-paper";
import { formatUpdatedTime } from "../utils/timeFormate";

const ListCard = ({title, img, des, langUsed, updatedDate}) => {
  const theme = useTheme();
  const [isLiked, setIsLiked] = useState(false); // State to track heart icon
  const LeftContent = props => <Avatar.Image
  size={40}
  source={{
    uri: img || 'https://avatars.githubusercontent.com/u/146647639?v=4',
  }}
/>
  const RightContent = props => <View style={{display: 'flex', alignItems:'flex-end', height:22, marginRight:10}}>
  <IconButton
  icon={isLiked ? "heart" : "heart-outline"} // Toggle icon
  iconColor={isLiked ? "red" : "gray"} // Change color when filled
  onPress={() => setIsLiked(!isLiked)} // Toggle state
/>
<Text>{formatUpdatedTime(updatedDate) ||"Updated on Jul 15, 2024"}</Text>
</View>

const langColors = {
  "JavaScript": "#f1e05a",
  "TypeScript": "#3178c6",
  "Python": "#3572A5",
  "Java": "#b07219",
  "C++": "#f34b7d",
  "Go": "#00ADD8",
  "Rust": "#dea584",
  "PHP": "#4F5D95",
  "C#": "#178600",
  "Swift": "#ffac45",
  "Kotlin": "#A97BFF",
  "Dart": "#00B4AB",
  "HTML": "#e34c26",
  "CSS": "#563d7c",
  "Shell": "#89e051"
};

  return (
    <Card style={[
          styles.cardStyle,
          {
            backgroundColor: theme.colors.background,
            shadowColor: theme.colors.onBackground, // Soft shadow
          },
        ]}>
    <Card.Title titleVariant="titleLarge" titleStyle={{color: '#4493f8'}} title={title || "title"} subtitle={des || "subtitle"} left={LeftContent} right={RightContent}/>
    <Card.Content style={{display: 'flex', flexDirection: 'row', alignItems:'center', gap:8}}>
      <View style={{height: 12, width: 12, borderRadius:50, backgroundColor: langColors[langUsed] || "orange"}}></View><Text variant="titleSmall">{langUsed || "JavaScript"}</Text>
    </Card.Content>
  </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  cardStyle: {
    borderWidth: .1,
    borderRadius: 10,
    borderColor: "gray",
    elevation: 3,
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    marginTop: 20,
  },
  text:{
    color:'#000'
  }
});

export default ListCard;
