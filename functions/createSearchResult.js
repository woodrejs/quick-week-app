import { convertEventsSearch, convertPlacesSearch } from "./convertData";

const createSearchResult = (data, type) => {
  return data.items.reduce((array, item) => {
    if ("location" in item) {
      if (type) {
        if ("mainImage" in item) array.push(convertPlacesSearch(item));
      } else {
        if ("offer" in item)
          if ("mainImage" in item.offer) array.push(convertEventsSearch(item));
      }
    }

    return array;
  }, []);
};
export default createSearchResult;
