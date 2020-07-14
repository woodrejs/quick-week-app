import React, { useEffect, useMemo } from "react";
import { ScrollView, View } from "react-native";
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
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView>
        {carts}
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </View>
  );
};

export default Events;
