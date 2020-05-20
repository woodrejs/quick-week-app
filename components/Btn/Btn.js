import React, { useEffect, useState, useRef } from "react";
import { Text, TouchableOpacity, setOpacityTo } from "react-native";
import styles from "./Btn.css";

//this.refs.touch.setOpacityTo(50); ??????

const Btn = ({ btnColor, txtColor, title, size }) => {
  const [btnStyle, setBtnStyle] = useState(null);
  const [txtStyle, setTxtStyle] = useState(null);

  useEffect(() => {
    if (size === "sm") {
      setTxtStyle({
        color: txtColor,
        fontSize: 10,
      });
      setBtnStyle({
        backgroundColor: btnColor,
        width: "50%",
        height: 28,
      });
    } else if (size === "md") {
      setTxtStyle({
        color: txtColor,
        fontSize: 12,
      });
      setBtnStyle({
        backgroundColor: btnColor,
        width: "70%",
        height: 41,
      });
    } else {
      setTxtStyle({
        color: txtColor,
        fontSize: 13,
      });
      setBtnStyle({
        backgroundColor: btnColor,
        width: "80%",
        height: 47,
      });
    }
  }, [size]);

  return (
    <TouchableOpacity
      onPress={(e) => console.log()}
      style={{ ...styles.btn, ...btnStyle }}
    >
      <Text style={{ ...styles.txt, ...txtStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
