import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { Props } from "./ShoeInterface";

const { width } = Dimensions.get("window");
interface ProdProps {
  produits: Props;
}

const Card: React.FunctionComponent<ProdProps> = ({ produits }) => {
  return (
    // <View style={{ width: "100%" }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <CardHeader produits={produits} />
          <CardBody produits={produits} />
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <CardFooter produits={produits} />
        </View>
      </View>
    // </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: "1%",
    borderWidth: 2,
    height: 310,
    width: "48%",
    borderColor: "lightblue",
    // borderColor: "blue",
    // backgroundColor: "tomato",
  },
  body: {
    flex: 1,
    justifyContent: "space-evenly",
    // backgroundColor: "yellow"
  },
});
