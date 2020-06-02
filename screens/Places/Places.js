import React from "react";
import { ScrollView, View } from "react-native";
import Basic from "../../components/Basic";
import Cart from "../../components/Cart";
import COLORS from "../../constans/COLORS";
import BckImg from "../../img/test.jpg";

const Places = ({ navigation }) => {
  return (
    <Basic title="plan" size="lg" navigation={navigation}>
      <ScrollView style={{ marginTop: "10%" }}>
        <Cart
          bckImg={BckImg}
          title="to jest jakis przykladowy tytul"
          quickIcon={true}
          color={COLORS.first}
          cornerTxt="closed"
          middleTxt="200m"
          onPress={() => navigation.navigate("Event")}
        />
        <Cart
          bckImg={BckImg}
          title="to jest jakis przykladowy tytul"
          quickIcon={true}
          color={COLORS.first}
          cornerTxt="closed"
          middleTxt="200m"
          onPress={() => navigation.navigate("Event")}
        />
        <Cart
          bckImg={BckImg}
          title="to jest jakis przykladowy tytul"
          quickIcon={true}
          color={COLORS.first}
          cornerTxt="closed"
          middleTxt="200m"
          onPress={() => navigation.navigate("Event")}
        />
        <Cart
          bckImg={BckImg}
          title="to jest jakis przykladowy tytul"
          quickIcon={true}
          color={COLORS.first}
          cornerTxt="closed"
          middleTxt="200m"
          onPress={() => navigation.navigate("Event")}
        />
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </Basic>
  );
};

export default Places;
