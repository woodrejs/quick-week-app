import React, { useEffect } from "react";
//import Navigation from "./navigation";
import setFonts from "./fonts";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import {
  storeCategories,
  storeInitCoords,
  storePlacesMarkers,
  storeEventsMarkers,
  storeUserInfo,
} from "../functions/setInStore";
import WelcomeStackScreen from "../routes/Welcome";
import { NavigationContainer } from "@react-navigation/native";

const Init = () => {
  const dispatch = useDispatch();
  const coordsLoaded = useSelector(({ map }) => map.coordsLoaded);
  const placesLoaded = useSelector(({ markers }) => markers.placesLoaded);
  const fontsLoaded = useSelector(({ fonts }) => fonts.fontsLoaded);

  setFonts(fontsLoaded);

  useEffect(() => {
    storeUserInfo(dispatch);
    storeInitCoords(dispatch);
    storeCategories(dispatch);
    storePlacesMarkers(dispatch);
    storeEventsMarkers(dispatch);
  }, []);

  if (fontsLoaded && placesLoaded && coordsLoaded)
    return (
      <NavigationContainer>
        <WelcomeStackScreen />
      </NavigationContainer>
    );
  //return <Navigation />;
  else return <Loading />;
};

export default Init;
