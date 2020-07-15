import React from "react";
import { View, StyleSheet } from "react-native";
import LogoIcon from "../../img/logo/lg_red.svg";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  return (
    <View style={styles.mainBox}>
      <View style={styles.menuBox}>
        <MaterialIcons
          name="menu"
          size={30}
          onPress={() => navigation.openDrawer()}
        />
      </View>

      <View style={styles.logoBox}>
        <LogoIcon height={46} width={46} />
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainBox: { flexDirection: "row" },
  logoBox: { flex: 3, justifyContent: "center", alignItems: "center" },
  menuBox: { flex: 1, justifyContent: "center", alignItems: "flex-start" },
});
