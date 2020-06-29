const setEventsSearchResult = (data) => {
  return data.items.reduce((array, item) => {
    if ("offer" in item)
      if ("mainImage" in item.offer)
        if ("location" in item) {
          array.push({
            id: item.id,
            title: item.offer.title,
            image: item.offer.mainImage.standard,
            latt: item.location.lattiude,
            long: item.location.longitude,
          });
        }
    return array;
  }, []);
};

export default setEventsSearchResult;
