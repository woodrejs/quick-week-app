import React from "react";
import { View } from "react-native";
import Basic from "../../components/Basic";
import Button from "../../components/Button";
import Txt from "../../components/Txt";
import COLORS from "../../constans/COLORS";
import styles from "./Menu.css";
import DIMENSIONS from "../../constans/DIMENSIONS";

const Menu = ({ navigation }) => {
  return (
    <Basic title="menu" size="lg" navigation={navigation}>
      <View style={styles.top}>
        <Button
          title="Map"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Map")}
        />
        <Button
          title="week plan"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
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
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.secound}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Events")}
        />
        <Button
          title="my places"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.secound}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Places")}
        />
      </View>
      <View style={styles.bot}>
        <Button
          title="log out"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.fourth}
          txtColor={COLORS.fifth}
          onPress={() => navigation.navigate("Welcome", { screen: "Welcome" })}
        />
      </View>
    </Basic>
  );
};

export default Menu;
