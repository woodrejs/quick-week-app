import React, { useEffect, useCallback } from "react";
import Navigation from "../components/Navigation";
import setFonts from "./setFonts";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import setCoords from "./setCoords";
import setMarkers from "./setMarkers";
import setCategories from "./setCategories";

const Init = () => {
  const isFontsLoaded = useSelector((state) => state.app.isFontsLoaded);
  const isCoordsLoaded = useSelector((state) => state.app.isCoordsLoaded);
  const isPlacesMarkersLoaded = useSelector(
    (state) => state.app.isPlacesMarkersLoaded
  );

  setFonts(isFontsLoaded);
  setCoords(isCoordsLoaded);
  setMarkers();
  setCategories();

  if (isFontsLoaded && isCoordsLoaded && isPlacesMarkersLoaded)
    return <Navigation />;
  else return <Loading />;
};

export default Init;
