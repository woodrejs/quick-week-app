import React from "react";
import { ScrollView } from "react-native";
import Basic from "../../components/Basic";
import Cart from "../../components/Cart";
import COLORS from "../../constans/COLORS";
import BckImg from "../../img/test.jpg";

const Events = ({ navigation }) => {
  return (
    <Basic title="plan" size="lg" navigation={navigation}>
      <ScrollView style={{ marginTop: "10%" }}>
        <Cart
          title="to jest jakis przykladowy tytul"
          quickIcon={true}
          color={COLORS.first}
          cornerTxt="2020-02-20"
          middleTxt="16:00"
          onPress={() => navigation.navigate("Event")}
          bckImg={BckImg}
        />
        <Cart
          title="to jest jakis przykladowy tytul"
          quickIcon={true}
          color={COLORS.first}
          cornerTxt="2020-02-20"
          middleTxt="16:00"
          onPress={() => navigation.navigate("Event")}
          bckImg={BckImg}
        />
        <Cart
          title="to jest jakis przykladowy tytul"
          quickIcon={true}
          color={COLORS.first}
          cornerTxt="2020-02-20"
          middleTxt="16:00"
          onPress={() => navigation.navigate("Event")}
          bckImg={BckImg}
        />
        <Cart
          title="to jest jakis przykladowy tytul"
          quickIcon={true}
          color={COLORS.first}
          cornerTxt="2020-02-20"
          middleTxt="16:00"
          onPress={() => navigation.navigate("Event")}
          bckImg={BckImg}
          heartIcon={true}
        />
      </ScrollView>
    </Basic>
  );
};

export default Events;
