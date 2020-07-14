import React, { useEffect, useMemo } from "react";
import { ScrollView, View } from "react-native";
import Basic from "../../components/Basic";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../utils/firebase";
import { favoritesActions } from "../../actions";
import { createPlanCarts } from "../../functions/createCarts";

const Plan = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector(({ user }) => user.id);
  const weekPlanEvents = useSelector(({ favorites }) => favorites.planEvents);
  const setDatainStore = (data) =>
    dispatch(favoritesActions.setPlanEvents(data));

  useEffect(() => {
    db.collection("WeekPlan")
      .doc(userId)
      .onSnapshot((doc) => {
        const data = Object.values(doc.data());
        setDatainStore(data);
      });
  }, []);

  const carts = useMemo(
    () => createPlanCarts(weekPlanEvents, true, dispatch, navigation),
    [weekPlanEvents]
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

export default Plan;

/*
 <Cart
          bckImg={BckImg}
          title="to jest jakis przykladowy tytul"
          cornerTxt="2020-02-25"
          middleTxt="16:50:26"
          quickIcon={true}
          color={COLORS.first}
          onPress={() => navigation.navigate("Event")}
        />

        */
