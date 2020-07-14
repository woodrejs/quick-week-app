import React from "react";
import { ScrollView, View } from "react-native";
import Basic from "../../components/Basic";
import { useSelector, useDispatch } from "react-redux";
import {
  createEventsCarts,
  createPlacesCarts,
} from "../../functions/createCarts";

const Result = ({ navigation }) => {
  const searchStore = useSelector(({ search }) => search);
  const { type, results } = searchStore;
  const dispatch = useDispatch();
  const carts = type
    ? createPlacesCarts(results, type, dispatch, navigation)
    : createEventsCarts(results, type, dispatch, navigation);

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
