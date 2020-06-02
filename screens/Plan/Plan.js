import React from "react";
import { View, ScrollView } from "react-native";
import Basic from "../../components/Basic";
import Cart from "../../components/Cart";
import COLORS from "../../constans/COLORS";
import BckImg from "../../img/test.jpg";

const Plan = ({ navigation }) => {
  return (
    <Basic title="plan" size="lg" navigation={navigation}>
      <ScrollView style={{ marginTop: "10%" }}>
        <Cart
          bckImg={BckImg}
          title="to jest jakis przykladowy tytul"
          cornerTxt="2020-02-25"
          middleTxt="16:50:26"
          quickIcon={true}
          color={COLORS.first}
          onPress={() => navigation.navigate("Event")}
        />
        <Cart
          bckImg={BckImg}
          title="to jest jakis przykladowy tytul"
          cornerTxt="2020-02-25"
          middleTxt="16:50:26"
          quickIcon={true}
          color={COLORS.first}
          onPress={() => navigation.navigate("Event")}
        />
        <Cart
          bckImg={BckImg}
          title="to jest jakis przykladowy tytul"
          cornerTxt="2020-02-25"
          middleTxt="16:50:26"
          quickIcon={true}
          color={COLORS.first}
          onPress={() => navigation.navigate("Event")}
        />
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </Basic>
  );
};

export default Plan;
