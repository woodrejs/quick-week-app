import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import Txt from "../../components/Txt";
import COLORS from "../../constans/COLORS";
import styles from "./Menu.css";
import DIMENSIONS from "../../constans/DIMENSIONS";
import { auth } from "../../utils/firebase";
import { userActions } from "../../actions";

const Menu = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleBtnSignIn = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(userActions.setUserPassword(""));
        dispatch(userActions.setUserMail(""));
        navigation.navigate("Welcome", { screen: "Welcome" });
      })
      .catch((err) => alert(err));
  };
  const primaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.first,
  };
  const secoundaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.secound,
  };
  const logOutBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.fourth,
  };

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <Button
          title="Map"
          customStyle={primaryBtn}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Map")}
        />
        <Button
          title="week plan"
          customStyle={primaryBtn}
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
          customStyle={secoundaryBtn}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Events")}
        />
        <Button
          title="my places"
          customStyle={secoundaryBtn}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Places")}
        />
      </View>
      <View style={styles.bot}>
        <Button
          title="log out"
          customStyle={logOutBtn}
          txtColor={COLORS.third}
          onPress={handleBtnSignIn}
        />
      </View>
    </View>
  );
};

export default Menu;
