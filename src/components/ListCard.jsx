import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import { useTheme } from "react-native-paper";

const ListCard = () => {
  const theme = useTheme();
  const [isLiked, setIsLiked] = useState(false); // State to track heart icon

  return (
    <View style={styles.card}>
      <Card.Title
        mode="contained"
        style={[
          styles.cardStyle,
          {
            backgroundColor: theme.colors.background,
            shadowColor: theme.colors.onBackground, // Soft shadow
          },
        ]}
        title="Card Title"
        titleStyle={{ fontWeight: "800", fontSize: 22 }}
        subtitle="Card Subtitle"
        subtitleStyle={{ fontWeight: "500", fontSize: 17 }}
        left={(props) => (
          <Avatar.Image
            size={50}
            source={{
              uri: "https://avatars.githubusercontent.com/u/146647639?v=4",
            }}
          />
        )}
        right={(props) => (
          <IconButton
            {...props}
            icon={isLiked ? "heart" : "heart-outline"} // Toggle icon
            iconColor={isLiked ? "red" : "gray"} // Change color when filled
            onPress={() => setIsLiked(!isLiked)} // Toggle state
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
  cardStyle: {
    borderWidth: .1,
    borderRadius: 10,
    borderColor: "gray",
    elevation: 3,
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
});

export default ListCard;
