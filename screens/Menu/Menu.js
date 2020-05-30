import React from "react";
import { View } from "react-native";
import Basic from "../../components/Basic";
import Button from "../../components/Button";
import Txt from "../../components/Txt";
import COLORS from "../../constans/COLORS";
import styles from "./Menu.css";

const Menu = ({ navigation }) => {
  return (
    <Basic title="menu" size="lg" navigation={navigation}>
      <View style={styles.top}>
        <Button
          title="week plan"
          height={40}
          width={280}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Plan")}
        />
      </View>
      <View style={styles.mid}>
        <Txt weight={600} customStyle={styles.txt}>
          favorites
        </Txt>
        <Button
          title="my events"
          height={40}
          width={280}
          bckColor={COLORS.secound}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Events")}
        />
        <Button
          title="my places"
          height={35}
          width={280}
          bckColor={COLORS.secound}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Places")}
        />
      </View>
      <View style={styles.bot}>
        <Button
          title="search"
          height={40}
          width={280}
          bckColor={COLORS.fourth}
          txtColor={COLORS.fifth}
          onPress={() => navigation.navigate("Search")}
        />
        <Button
          title="log out"
          height={40}
          width={280}
          bckColor={COLORS.fourth}
          txtColor={COLORS.fifth}
        />
      </View>
    </Basic>
  );
};

export default Menu;
