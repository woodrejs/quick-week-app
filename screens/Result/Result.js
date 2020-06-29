import React from "react";
import { ScrollView, View } from "react-native";
import Basic from "../../components/Basic";
import Cart from "../../components/Cart";
import COLORS from "../../constans/COLORS";
import BckImg from "../../img/test.jpg";
import { useSelector } from "react-redux";

const Result = ({ navigation }) => {
  const results = useSelector(({ search }) => search.results);
  const carts = results.map((result) => (
    <Cart
      bckImg={result.image}
      title={result.title}
      heartIcon={true}
      quickIcon={true}
      color={COLORS.first}
      onPress={() => navigation.navigate("Event")}
    />
  ));
  return (
    <Basic title="plan" size="lg" navigation={navigation}>
      <ScrollView style={{ marginTop: "10%" }}>
        {carts}
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </Basic>
  );
};

export default Result;
