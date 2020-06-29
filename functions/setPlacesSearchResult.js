const setPlacesSearchResult = (data) => {
  return data.items.reduce((array, item) => {
    if ("mainImage" in item)
      if ("location" in item) {
        array.push({
          id: item.id,
          title: item.title,
          image: item.mainImage.standard,
          latt: item.location.lattiude,
          long: item.location.longitude,
        });
      }
    return array;
  }, []);
};
export default setPlacesSearchResult;
