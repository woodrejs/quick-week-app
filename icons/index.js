import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const Phone = (size, color, onPress) => (
  <MaterialCommunityIcons
    name="cellphone"
    size={size}
    color={color}
    onPress={onPress}
  />
);
export const Street = (size, color, onPress) => (
  <MaterialIcons
    name="location-on"
    size={size}
    color={color}
    onPress={onPress}
  />
);
export const Parking = (size, color, onPress) => (
  <MaterialIcons
    name="local-parking"
    size={24}
    color={color}
    onPress={onPress}
  />
);
export const Email = (size, color, onPress) => (
  <Zocial name="email" size={size} color={color} onPress={onPress} />
);
export const Clock = (size, color, onPress) => (
  <AntDesign name="clockcircle" size={size} color={color} onPress={onPress} />
);
export const Place = (size, color, onPress) => (
  <FontAwesome name="building" size={size} color={color} onPress={onPress} />
);
export const Menu = (size, color, onPress) => (
  <MaterialIcons name="menu" size={size} color={color} onPress={onPress} />
);
export const Ticket = (size, color, onPress) => (
  <FontAwesome name="ticket" size={size} color={color} onPress={onPress} />
);
