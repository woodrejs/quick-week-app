import React, { useEffect, useState } from "react";
import { View } from "react-native";
import SmLight from "../../img/backgrounds/smLight.svg";
import SmDark from "../../img/backgrounds/smDark.svg";
import MdLight from "../../img/backgrounds/mdLight.svg";
import MdDark from "../../img/backgrounds/mdDark.svg";
import LgLight from "../../img/backgrounds/lgLight.svg";
import LgDark from "../../img/backgrounds/lgDark.svg";
import styles from "./Bck.css";

const Bck = ({ size }) => {
  const [darkBck, setDarkBck] = useState(null);
  const [lightBck, setLightBck] = useState(null);

  useEffect(() => {
    if (size === "sm") {
      setDarkBck(<SmDark style={styles.dark} width="100%" />);
      setLightBck(<SmLight style={styles.light} width="100%" />);
    } else if (size === "md") {
      setDarkBck(<MdDark style={styles.dark} width="100%" />);
      setLightBck(<MdLight style={styles.light} width="100%" />);
    } else {
      setDarkBck(<LgDark style={styles.dark} width="100%" />);
      setLightBck(<LgLight style={styles.light} width="100%" />);
    }
  }, [size]);

  return (
    <View style={styles.box}>
      {darkBck}
      {lightBck}
    </View>
  );
};

export default Bck;
