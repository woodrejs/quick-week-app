import React, { useEffect, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { db } from "../../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { createPlacesCarts } from "../../functions/createCarts";
import { favoritesActions } from "../../actions";

const Places = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector(({ user }) => user.id);
  const favoritesPlaces = useSelector(({ favorites }) => favorites.places);
  const setDataInStore = (data) =>
    dispatch(favoritesActions.setFavoritesPlaces(data));

  useEffect(() => {
    db.collection("favoritesPlaces")
      .doc(userId)
      .onSnapshot((doc) => {
        const data = Object.values(doc.data());
        setDataInStore(data);
      });
  }, []);

  const carts = useMemo(
    () => createPlacesCarts(favoritesPlaces, true, dispatch, navigation),
    [favoritesPlaces]
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

export default Places;
