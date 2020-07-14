import React, { useEffect, useMemo } from "react";
import { ScrollView, View } from "react-native";
import Basic from "../../components/Basic";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../utils/firebase";
import { favoritesActions } from "../../actions";
import { createEventsCarts } from "../../functions/createCarts";

const Events = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector(({ user }) => user.id);
  const favoritesEvents = useSelector(({ favorites }) => favorites.events);
  const setDataInStore = (data) =>
    dispatch(favoritesActions.setFavoritesEvents(data));

  useEffect(() => {
    db.collection("favoritesEvents")
      .doc(userId)
      .onSnapshot((doc) => {
        const data = Object.values(doc.data());
        setDataInStore(data);
      });
  }, []);

  const carts = useMemo(
    () => createEventsCarts(favoritesEvents, false, dispatch, navigation),
    [favoritesEvents]
  );

  return (
    <Basic title="plan" size="lg" navigation={navigation}>
      <ScrollView style={{ marginTop: "10%" }}>
        {carts}
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </Basic>
  );
};

export default Events;
