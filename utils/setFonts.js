import { useFonts } from "@use-expo/font";
import { useDispatch } from "react-redux";
import { appActions } from "../actions";

const setFonts = () => {
  const dispatch = useDispatch();
  let [isLoaded] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });
  if (isLoaded) dispatch(appActions.setFontsLoaded());
  else dispatch(appActions.setFontsLoading());
};
export default setFonts;
