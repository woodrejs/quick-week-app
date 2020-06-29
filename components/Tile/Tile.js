import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, TouchableOpacity } from "react-native";
import COLORS from "../../constans/COLORS";
import styles from "./Tile.css";
import Txt from "../Txt";
import { searchActions } from "../../actions";

const Tile = ({ name, id }) => {
  const { secound, sixth } = COLORS;
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const categoryNames = [...useSelector(({ search }) => search.categories)];

  const handleClick = () => {
    const newNames = categoryNames.filter((item) => item.name !== name);
    const isNameInStore = categoryNames.length !== newNames.length;

    !isNameInStore ? setIsChecked(true) : setIsChecked(false);
    !isNameInStore && newNames.push({ name, id });

    dispatch(searchActions.setSearchCategories(newNames));
  };

  const selectedColor = `${isChecked ? secound : sixth}`;
  const viewStyle = {
    ...styles.box,
    ...{ borderColor: selectedColor },
  };
  const txtStyle = {
    ...styles.txt,
    ...{ color: selectedColor },
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={viewStyle}>
        <Txt weight={600} customStyle={txtStyle}>
          {name}
        </Txt>
      </View>
    </TouchableOpacity>
  );
};

export default Tile;
