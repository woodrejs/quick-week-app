import React from "react";
import { View, ScrollView } from "react-native";
import Basic from "../../components/Basic";
import Cart from "../../components/Cart";
import COLORS from "../../constans/COLORS";

const Plan = ({ navigation }) => {
  return (
    <Basic title="plan" size="lg" navigation={navigation}>
      <ScrollView style={{ marginTop: "10%" }}>
        <Cart
          title="to jest jakis przykladowy tytul"
          date="2020-02-25"
          startDate={null}
          time="16:50:26"
          favoritesIcon={false}
          quicIcon={true}
          labelColor={COLORS.first}
          onPress={() => navigation.navigate("Event")}
        />
        <Cart
          title="to jest jakis przykladowy tytul"
          date="2020-02-25"
          startDate={null}
          time="16:50:26"
          favoritesIcon={false}
          quicIcon={true}
          labelColor={COLORS.secound}
          onPress={() => navigation.navigate("Event")}
        />
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </Basic>
  );
};

export default Plan;
