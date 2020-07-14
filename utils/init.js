import React, { useEffect } from "react";
import Navigation from "./navigation";
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

const Init = () => {
  const dispatch = useDispatch();
  const app = useSelector(({ app }) => app);
  const { isFontsLoaded, isCoordsLoaded, isPlacesMarkersLoaded } = app;

  setFonts(isFontsLoaded);

  useEffect(() => {
    storeUserInfo(dispatch);
    storeInitCoords(dispatch);
    storeCategories(dispatch);
    storePlacesMarkers(dispatch);
    storeEventsMarkers(dispatch);
  }, []);

  if (isFontsLoaded && isPlacesMarkersLoaded && isCoordsLoaded)
    return <Navigation />;
  else return <Loading />;
};

export default Init;
