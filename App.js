import React from "react";
import { useFonts } from "@use-expo/font";
import Navigation from "./navigation";
import Loading from "./components/Loading";

export default App = () => {
  let [isLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!isLoaded) return <Loading />;
  else return <Navigation />;
};
