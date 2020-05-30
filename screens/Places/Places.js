import React from "react";
import { ScrollView, View } from "react-native";
import Basic from "../../components/Basic";
import Cart from "../../components/Cart";
import COLORS from "../../constans/COLORS";

const Places = ({ navigation }) => {
  return (
    <Basic title="plan" size="lg" navigation={navigation}>
      <ScrollView style={{ marginTop: "10%" }}>
        <Cart
          title="to jest jakis przykladowy tytul"
          quicIcon={true}
          labelColor={COLORS.first}
          now="closed"
          distance="200m"
          onPress={() => navigation.navigate("Event")}
        />
        <Cart
          title="to jest jakis przykladowy tytul"
          quicIcon={true}
          labelColor={COLORS.secound}
          now="closed"
          distance="500m"
          onPress={() => navigation.navigate("Event")}
        />

        <View style={{ height: 20 }}></View>
      </ScrollView>
    </Basic>
  );
};

export default Places;
