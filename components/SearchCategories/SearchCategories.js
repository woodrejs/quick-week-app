import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Txt from "../Txt";
import Button from "../Button";
import COLORS from "../../constans/COLORS";
import Tile from "../Tile";

const tmpData = [
  { title: "places", id: "1" },
  { title: "places", id: "11" },
  { title: "places", id: "111" },
  { title: "places", id: "1111" },
  { title: "places", id: "11111" },
  { title: "places", id: "111111" },
  { title: "places", id: "11111112" },
  { title: "places", id: "11111113" },
  { title: "places", id: "11111114" },
  { title: "places", id: "11111115" },
];

const SearchCategories = ({ next }) => {
  return (
    <View>
      <Txt weight={600} customStyle={styles.txt}>
        CATEGORIES
      </Txt>
      <View style={styles.list}>
        <FlatList
          style={styles.box}
          horizontal={false}
          numColumns={4}
          data={tmpData}
          renderItem={({ item }) => <Tile title={item.title} key={item.id} />}
        />
      </View>

      <Button
        title="next"
        height={40}
        width={280}
        bckColor={COLORS.first}
        txtColor={COLORS.fourth}
        onPress={next}
      />
    </View>
  );
};

export default SearchCategories;

const styles = StyleSheet.create({
  txt: {
    textAlign: "left",
    //marginBottom: 20,
    width: "70%",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  box: {
    //marginVertical: 10
  },
  list: { height: "40%" },
});
