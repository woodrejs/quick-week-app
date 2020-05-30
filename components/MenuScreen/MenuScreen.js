import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import TopBar from "../TopBar";
import LogoBck from "../../img/logo/lg_red.svg";
import SmLight from "../../img/backgrounds/smLight.svg";

//dodac islogged do stora !!!!!!!!!!!!!!

const MenuScreen = ({ title, children }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <LogoBck style={styles.logo} />
        <View style={styles.menu}>
          <Text style={styles.title}>menu</Text>
          <Text style={styles.account}>account</Text>
        </View>
        <View style={styles.back}>
          <TouchableOpacity>
            <Text style={styles.backTxt}>back</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bot}></View>
      <View style={styles.bck}>
        <SmLight width={"100%"}></SmLight>
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 500,
    width: 500,
  },
  top: {
    flex: 2,
    width: "100%",
    flexDirection: "row",
    position: "relative",
    zIndex: -1,
  },
  bot: { flex: 7, backgroundColor: "blue" },
  logo: {
    transform: [{ translateY: -28 }, { translateX: -15 }, { scale: 1.5 }],
  },
  bck: {
    width: "100%",
    height: "100%",
    position: "absolute",
    //backgroundColor: "red",
    bottom: 0,
    justifyContent: "flex-end",
  },
  menu: {
    //backgroundColor: "yellow",
    width: "90%",
    height: 30,
    position: "absolute",
    top: "30%",
    left: "5%",
    alignItems: "center",
    flexDirection: "row",
  },
  back: {
    position: "absolute",
    top: "60%",
    right: "5%",
    width: "90%",
    height: 30,
    justifyContent: "center",
    alignItems: "flex-end",
    //backgroundColor: "green",
  },
  backTxt: {
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 12,
  },
  title: {
    flex: 1,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 16,
  },
  account: {
    flex: 1,
    textAlign: "right",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 10,
  },
});
/*
  <View style={styles.screen}>
      <View style={styles.bar}>
        <TopBar title={title} isLogged={true} />
      </View>
      <View style={styles.container}>{children}</View>
    </View>
    */
