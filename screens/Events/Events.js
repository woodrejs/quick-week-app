import React from "react";
import { ScrollView, View } from "react-native";
import Basic from "../../components/Basic";
import Cart from "../../components/Cart";
import COLORS from "../../constans/COLORS";

const Events = ({ navigation }) => {
  return (
    <Basic title="plan" size="lg" navigation={navigation}>
      <ScrollView style={{ marginTop: "10%" }}>
        <Cart
          title="to jest jakis przykladowy tytul"
          quicIcon={true}
          labelColor={COLORS.first}
          date="2020-02-20"
          hour="16:00"
          onPress={() => navigation.navigate("Event")}
        />
        <Cart
          title="to jest jakis przykladowy tytul"
          quicIcon={true}
          labelColor={COLORS.secound}
          date="2020-02-20"
          hour="16:00"
          onPress={() => navigation.navigate("Event")}
        />

        <View style={{ height: 20 }}></View>
      </ScrollView>
    </Basic>
  );
};

export default Events;
