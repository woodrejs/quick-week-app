import { useDispatch } from "react-redux";
import { appActions } from "../actions";
import getCategories from "../functions/getCategories";

const setCategories = () => {
  const dispatch = useDispatch();
  const KEY = process.env.KEY;
  const placesCategoriesURL = `https://go.wroclaw.pl/api/v1.0/categories/for-places/?key=${KEY}`;
  const eventsCategoriesURL = `https://go.wroclaw.pl/api/v1.0/categories/for-offers/?key=${KEY}`;

  getCategories(placesCategoriesURL, appActions.setPlacesCategories, dispatch);
  getCategories(eventsCategoriesURL, appActions.setEventsCategories, dispatch);
};

export default setCategories;
