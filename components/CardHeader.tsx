import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Props } from "./ShoeInterface";

interface HeaderProps {
  produits: Props
}

const CardHeader: React.FunctionComponent<HeaderProps> = ({produits}) => {
  return (
    <View style={styles.container}>
      <Text>{produits.price}€ </Text>
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: "lightblue",
    flexDirection: "row",
    justifyContent: "flex-end",
  }
});
