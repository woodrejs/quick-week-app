import { useFonts } from "@use-expo/font";
import { useDispatch } from "react-redux";
import { appActions } from "../actions";

const setFonts = (fontsLoaded) => {
  let [isLoaded] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });
  const dispatch = useDispatch();

  if (!fontsLoaded && isLoaded) dispatch(appActions.setFontsLoaded());
};
export default setFonts;
