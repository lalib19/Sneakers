import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Props } from "./ShoeInterface";
import LikeBtn from "./LikeBtn";

interface FooterProps {
  produits: Props;
}

const CardFooter: React.FunctionComponent<FooterProps> = ({ produits }) => {
  return (
    <View style={styles.container}>
      <Text>Taille {produits.size}</Text>
      <LikeBtn likes={produits.likes} />
    </View>
  );
};

export default CardFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "green"
  },
});
