import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Txt from "../Txt";
import Button from "../Button";
import COLORS from "../../constans/COLORS";
import Tile from "../Tile";
import DIMENSIONS from "../../constans/DIMENSIONS";
import styles from "./SearchCategories.css";
import uuid from "uuid-random";

const SearchCategories = ({ next }) => {
  const searchType = useSelector(({ search }) => search.type);
  const categories = useSelector(({ categories }) => categories);
  const data = searchType ? categories.places : categories.events;
  const primaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.first,
  };

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
          data={data}
          renderItem={({ item }) => <Tile name={item.name} id={item.id} />}
          keyExtractor={() => uuid()}
        />
      </View>
      <View style={styles.btnBox}>
        <Button
          title="next"
          customStyle={primaryBtn}
          txtColor={COLORS.fourth}
          onPress={next}
        />
      </View>
    </View>
  );
};

export default SearchCategories;
