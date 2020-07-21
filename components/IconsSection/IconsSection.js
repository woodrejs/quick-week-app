import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import QwIcon from "../../img/logo/lg_white.svg";
import HeartIcon from "../../img/heart/heart_white.svg";
import DIMENSIONS from "../../constans/DIMENSIONS";
import { useSelector } from "react-redux";
import addToFavorites from "../../functions/addToFavorites";

const IconsSection = ({
  customStyle,
  iconSize,
  heartIcon,
  quickIcon,
  data,
}) => {
  const collName = data.type ? "favoritesPlaces" : "favoritesEvents";
  const userId = useSelector(({ user }) => user.id);
  const handleFavoriteIcon = () => addToFavorites(collName, userId, data);
  const handleWeekPlanIcon = () => addToFavorites("WeekPlan", userId, data);

  return (
    <View style={{ ...styles.box, ...customStyle }}>
      {heartIcon && (
        <TouchableOpacity style={styles.topIcon} onPress={handleFavoriteIcon}>
          <HeartIcon height={iconSize} width={iconSize} />
        </TouchableOpacity>
      )}
      {quickIcon && (
        <TouchableOpacity onPress={handleWeekPlanIcon}>
          <QwIcon height={iconSize} width={iconSize} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default IconsSection;

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topIcon: { marginBottom: DIMENSIONS.height * 0.04 },
});
