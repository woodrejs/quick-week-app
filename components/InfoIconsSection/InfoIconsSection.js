import React from "react";
import { View, StyleSheet } from "react-native";
import InfoIcon from "../InfoIcon";
import COLORS from "../../constans/COLORS";
import {
  Phone,
  Clock,
  Email,
  Place,
  Street,
  Parking,
  Ticket,
} from "../../icons";

const InfoIconsSection = ({ data }) => {
  const {
    street,
    telephone,
    email,
    carParkAvailable,
    type,
    ticketing,
    startDate,
    place,
  } = data;

  return (
    <View style={styles.box}>
      <InfoIcon
        icon={type ? Phone(23, COLORS.first) : Clock(25, COLORS.first)}
        txt={type ? telephone : startDate}
      />
      <InfoIcon
        icon={type ? Email(25, COLORS.first) : Place(24, COLORS.first)}
        txt={type ? email : place}
      />
      <InfoIcon
        icon={type ? Parking(30, COLORS.first) : Ticket(30, COLORS.first)}
        txt={type ? carParkAvailable : ticketing}
      />
      <InfoIcon icon={Street(30, COLORS.first)} txt={street} />
    </View>
  );
};

export default InfoIconsSection;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    width: "90%",
    flexWrap: "wrap",
    height: 120,
    marginBottom: 30,
  },
});
