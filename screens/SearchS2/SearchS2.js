import React from "react";
import { View } from "react-native";
import COLORS from "../../constans/COLORS";
import Basic from "../../components/Basic";
import Datepicker from "../../components/Datepicker";
import Button from "../../components/Button";
import styles from "./SearchS2.css";

const SearchS2 = ({ navigation }) => {
  return (
    <Basic title="search" size="sm" navigation={navigation}>
      <View style={styles.top}>
        <Datepicker label="from" />
        <Datepicker label="to" />
        <View style={styles.btn}>
          <Button
            title="next"
            height={40}
            width={280}
            bckColor={COLORS.first}
            txtColor={COLORS.fourth}
            onPress={() => navigation.navigate("Result")}
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
          onPress={() => navigation.navigate("SearchResult")}
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

export default SearchS2;
