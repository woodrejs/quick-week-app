import React from "react";
import { View } from "react-native";
import COLORS from "../../constans/COLORS";
import Basic from "../../components/Basic";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Checkbox from "../../components/CheckBox";
import styles from "./Search.css";

const Search = ({ navigation }) => {
  return (
    <Basic title="search" size="sm" navigation={navigation}>
      <View style={styles.top}>
        <View style={styles.container}>
          <Input label="phrase" size={{ height: 40, width: 280 }} />
          <View style={styles.box}>
            <Checkbox title="places" />
            <Checkbox title="events" />
          </View>
          <Button
            title="next"
            height={40}
            width={280}
            bckColor={COLORS.first}
            txtColor={COLORS.fourth}
            onPress={() => navigation.navigate("SearchS1")}
          />
        </View>
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
          onPress={() => navigation.navigate("SearchS1")}
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

export default Search;
