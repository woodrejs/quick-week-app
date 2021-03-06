import React from "react";
import { View } from "react-native";
import Button from "../Button";
import Datepicker from "../Datepicker";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";
import Txt from "../../components/Txt";
import styles from "./SearchDate.css";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../actions";
import createSearchResult from "../../functions/createSearchResult";
import DATE from "../../constans/DATE";

const SearchDate = ({ navigation, next }) => {
  const dispatch = useDispatch();
  const searchParam = useSelector(({ search }) => search);
  const { phrase, type, categories, dateFrom, dateTo } = searchParam;
  const categoryID = categories.map((category) => category.id).toString();
  const KEY = process.env.KEY;
  const primaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.first,
  };

  const FROM = dateFrom ? dateFrom : DATE.from;
  const TO = dateTo ? dateTo : DATE.to;

  const placesURL = `https://go.wroclaw.pl/api/v1.0/places/?key=${KEY}&q=${phrase}&category-id=${categoryID}`;
  const eventsURL = `https://go.wroclaw.pl/api/v1.0/events/?key=${KEY}&q=${phrase}&category-id=${categoryID}&time-from=${FROM}&time-to=${TO}`;
  const URL = type ? placesURL : eventsURL;

  const search = () => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((resp) => {
        const result = createSearchResult(resp, type);
        next();
        dispatch(searchActions.setResults(result));
        dispatch(searchActions.setSearchDateFrom(null));
        dispatch(searchActions.setSearchDateTo(null));
        dispatch(searchActions.setSearchPhrase(""));
        dispatch(searchActions.setSearchCategories([]));

        navigation.navigate("Result");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.txtBox}>
        <Txt weight={500} customStyle={styles.txt}>
          Date
        </Txt>
      </View>
      <View style={styles.dateBox}>
        <Datepicker label="from" />
        <Datepicker label="to" />
      </View>
      <View customStyle={styles.btnBox}>
        <Button
          title="next"
          customStyle={primaryBtn}
          txtColor={COLORS.fourth}
          onPress={search}
        />
      </View>
    </View>
  );
};

export default SearchDate;
