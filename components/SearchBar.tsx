import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface SearchProps {
  handler: any;
}

const SearchBar: React.FC<SearchProps> = ({ handler }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher"
        onChangeText={handler}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightblue",
    height: 40,
    marginTop: 25,
    marginBottom: 20,
    width: "50%",
  },
  input: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});
