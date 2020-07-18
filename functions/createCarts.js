import COLORS from "../constans/COLORS";
import uuid from "uuid-random";
import React from "react";
import Cart from "../components/Cart";
import { storeEvent, storePlace } from "./setInStore";

export const createEventsCarts = (
  array,
  type,
  dispatch,
  navigation,
  isSearchResult = false
) => {
  return array.map((data) => {
    const onPress = async () => {
      await storeEvent(data.id, dispatch);
      navigation.navigate("Event");
    };

    return (
      <Cart
        data={data}
        type={type}
        key={uuid()}
        color={COLORS.first}
        onPress={onPress}
        collection={"favoritesEvents"}
        heartIcon={isSearchResult ? true : false}
        quickIcon={isSearchResult ? true : true}
      />
    );
  });
};

export const createPlacesCarts = (
  array,
  type,
  dispatch,
  navigation,
  isSearchResult = false
) => {
  return array.map((data) => {
    const onPress = async () => {
      await storePlace(data.id, dispatch);
      navigation.navigate("Event");
    };

    return (
      <Cart
        data={data}
        type={type}
        key={uuid()}
        color={COLORS.first}
        onPress={onPress}
        collection={"favoritesPlaces"}
        heartIcon={isSearchResult ? true : false}
        quickIcon={false}
      />
    );
  });
};

export const createPlanCarts = (array, type, dispatch, navigation) => {
  return array.map((data) => {
    const onPress = async () => {
      await storeEvent(data.id, dispatch);
      navigation.navigate("Event");
    };

    return (
      <Cart
        data={data}
        type={type}
        key={uuid()}
        color={COLORS.first}
        onPress={onPress}
        collection={"WeekPlan"}
        heartIcon={true}
        quickIcon={false}
      />
    );
  });
};
