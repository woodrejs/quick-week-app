import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DIMENSIONS = {
  width: windowWidth,
  height: windowHeight,
};

export default DIMENSIONS;
