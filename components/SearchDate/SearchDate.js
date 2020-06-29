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
import setPlacesSearchResult from "../../functions/setPlacesSearchResult";
import setEventsSearchResult from "../../functions/setEventsSearchResult";

const SearchDate = ({ navigation }) => {
  const dispatch = useDispatch();
  const searchParam = useSelector(({ search }) => search);
  const { phrase, type, categories, dateFrom, dateTo } = searchParam;
  const categoryID = categories.map((category) => category.id).toString();
  const KEY = process.env.KEY;

  const placesURL = `http://go.wroclaw.pl/api/v1.0/places/?key=${KEY}&q=${phrase}&category-id=${categoryID}`;
  const eventsURL = `http://go.wroclaw.pl/api/v1.0/events/?key=${KEY}&q=${phrase}&category-id=${categoryID}&time-from=${dateFrom}&time-to=${dateTo}`;

  const search = () => {
    const URL = type ? placesURL : eventsURL;

    fetch(URL)
      .then((resp) => resp.json())
      .then((resp) => {
        const result = type
          ? setPlacesSearchResult(resp)
          : setEventsSearchResult(resp);

        dispatch(searchActions.setResults(result));
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
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={search}
        />
      </View>
    </View>
  );
};

export default SearchDate;
