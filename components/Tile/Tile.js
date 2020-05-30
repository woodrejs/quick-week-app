import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import COLORS from "../../constans/COLORS";
import styles from "./Tile.css";

const Tile = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => setIsChecked(!isChecked);

  return (
    <TouchableOpacity onPress={handleClick}>
      <View
        style={{
          ...styles.box,
          ...{ borderColor: `${isChecked ? COLORS.secound : COLORS.sixth}` },
        }}
      >
        <Text
          style={{
            ...styles.txt,
            ...{ color: `${isChecked ? COLORS.secound : COLORS.sixth}` },
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tile;
