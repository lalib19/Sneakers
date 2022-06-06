import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Props } from "./components/ShoeInterface";
import Card from "./components/Card";
import PRODUITS from "./data";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export default function App() {
  // const data = () => {
  //   json.map((el: any, index: number) => {

  //   })
  // }

  const [search, setSearch] = useState("");

  const handleSearchChange = (text: string) => {
    setSearch(text);
    // console.log(search)
  };

  const filtered = !search
    ? PRODUITS
    : PRODUITS.filter((shoe) =>
        shoe.title.toLowerCase().includes(search.toLowerCase())
      );

  const renderCard: ListRenderItem<Props> = ({ item }) => {
    return <Card key={item.id} produits={item} />;
  };
  // const renderSearchBar = () => {
  //   return <SearchBar handler={handleSearchChange} />;
  // };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filtered}
        renderItem={renderCard}
        numColumns={2}
        ListHeaderComponent={<SearchBar handler={handleSearchChange} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    // backgroundColor: "blue"
  },
});
