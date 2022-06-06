import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Props } from "./ShoeInterface";
import PRODUITS from "../data";

interface BodyProps {
  produits: Props;
}

const CardBody: React.FunctionComponent<BodyProps> = ({ produits }) => {
  return (
    <View style={styles.container}>
      <Image source={produits.photo} style={styles.image} />
      <Text>{produits.title}</Text>
      <View style={styles.texte}>
        <Text numberOfLines={5}>{produits.desc}</Text>
      </View>
    </View>
  );
};
export default CardBody;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "lightblue",
  },
  texte: {
    flex:1,
    overflow: "hidden",
    marginTop: 10
  },
  container: {
    // backgroundColor: "blue",
    flex: 1,
    // width: "100%"
  },
});
