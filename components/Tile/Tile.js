import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import COLORS from "../../constans/COLORS";
import styles from "./Tile.css";
import Txt from "../Txt";

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
        <Txt
          weight={600}
          customStyle={{
            ...styles.txt,
            ...{ color: `${isChecked ? COLORS.secound : COLORS.sixth}` },
          }}
        >
          {title}
        </Txt>
      </View>
    </TouchableOpacity>
  );
};

export default Tile;
