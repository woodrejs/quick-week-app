import React from "react";
import { View, FlatList } from "react-native";
import Txt from "../Txt";
import Button from "../Button";
import COLORS from "../../constans/COLORS";
import Tile from "../Tile";
import DIMENSIONS from "../../constans/DIMENSIONS";
import styles from "./SearchCategories.css";

const tmpData = [
  { title: "plaasdces", id: "1" },
  { title: "places", id: "11" },
  { title: "placsadasdes", id: "111" },
  { title: "places", id: "1111" },
  { title: "plaasdces", id: "11111" },
  { title: "pladsadasces", id: "111111" },
  { title: "places", id: "11111112" },
  { title: "plasadasdasdsasadaces", id: "11111113" },
  { title: "places", id: "11111114" },
  { title: "placasdaes", id: "11111115" },
];

const SearchCategories = ({ next }) => {
  return (
    <View style={styles.mainBox}>
      <View style={styles.txtBox}>
        <Txt weight={500} customStyle={styles.txt}>
          CATEGORIES
        </Txt>
      </View>
      <View style={styles.listBox}>
        <FlatList
          horizontal={false}
          numColumns={1}
          data={tmpData}
          renderItem={({ item }) => <Tile title={item.title} key={item.id} />}
        />
      </View>
      <View style={styles.btnBox}>
        <Button
          title="next"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={next}
        />
      </View>
    </View>
  );
};

export default SearchCategories;
