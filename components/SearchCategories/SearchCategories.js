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
  const placesCategories = useSelector(({ app }) => app.placesCategories);
  const eventsCategories = useSelector(({ app }) => app.eventsCategories);
  const categories = searchType ? placesCategories : eventsCategories;

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
          data={categories}
          renderItem={({ item }) => <Tile name={item.name} id={item.id} />}
          keyExtractor={() => uuid()}
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
