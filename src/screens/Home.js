import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="GO TO LOGIN"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00bcd4",
  },
});
export default Home;
