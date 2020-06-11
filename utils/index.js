import React from "react";
import Navigation from "../components/Navigation";
import setFonts from "./setFonts";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import setLocation from "./setLocation";

const Init = () => {
  setFonts();
  setLocation();
  const isFontsLoaded = useSelector((state) => state.app.isFontsLoaded);
  const isLocationLoaded = useSelector((state) => state.app.isLocationLoaded);

  if (isFontsLoaded && isLocationLoaded) return <Navigation />;
  else return <Loading />;
};

export default Init;
