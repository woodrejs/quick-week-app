import { useSelector, useDispatch } from "react-redux";

const search = () => {
  alert("dziala");

  const phrase = useSelector(({ search }) => search.phrase);

  /*
  const type = useSelector(({ search }) => search.type);
  const categories = useSelector(({ search }) => search.categories);
  const dateFrom = useSelector(({ search }) => search.dateFrom);
  const dateTo = useSelector(({ search }) => search.dateTo);
  const KEY = process.env.KEY;
  const placesURL = `http://go.wroclaw.pl/api/v1.0/places/?key=${KEY}&q=${phrase}&category-id=${categories}`;
*/
};

export default search;
