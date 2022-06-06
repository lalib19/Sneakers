import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Props } from "./ShoeInterface";
import { Ionicons } from "@expo/vector-icons";

interface BtnProps {
  likes?: any;
}

const LikeBtn: React.FunctionComponent<BtnProps> = ({ likes }) => {
  const [like, setLike] = useState<boolean>(false);
  const [number, setNumber] = useState<number>(parseInt(likes));

  // const parse = parseInt(likes);

  const likeHandler = () => {
    setLike(!like);
    !like ? setNumber(number + 1) : setNumber(number - 1);
    // console.log(number, like);
  };

  const icon = () => {
    if (!like) {
      return (
        <Ionicons
          name="heart-outline"
          color="blue"
          size={18}
          onPress={likeHandler}
        />
      );
    } else {
      return (
        <Ionicons name="heart" color="blue" size={18} onPress={likeHandler} />
      );
    }
  };
  return (
    <View style={styles.container}>
      {icon()}
      {/* <Ionicons name={like ? "heart-outline" : "heart"} color="blue" size={18} onPress={likeHandler} /> */}

      <Text> {number} </Text>
    </View>
  );
};

export default LikeBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
