import React from "react";
import { View, FlatList } from "react-native";
import Txt from "../../components/Txt";
import COLORS from "../../constans/COLORS";
import Basic from "../../components/Basic";
import Button from "../../components/Button";
import Tile from "../../components/Tile";
import styles from "./SearchS1.css";
//dodac do kafli
import uuid from "uuid-random";

const SearchS1 = ({ navigation }) => {
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
  return (
    <Basic title="search" navigation={navigation}>
      <View style={styles.top}>
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
          onPress={() => navigation.navigate("SearchS2")}
        />
      </View>
      <View style={styles.mid}>
        <View style={styles.steps}></View>
      </View>
      <View style={styles.bot}>
        <Button
          title="skip"
          height={30}
          width={280}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          onPress={() => navigation.navigate("SearchS2")}
        />
        <Button
          title="back"
          height={30}
          width={280}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Basic>
  );
};

export default SearchS1;
