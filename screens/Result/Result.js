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
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView>
        {carts}
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </View>
  );
};

export default Result;
