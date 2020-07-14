export const isCoordsInRange = (coords, long, latt) => {
  const { longitude, latitude, longitudeDelta, latitudeDelta } = coords;
  const RANGE = 0.3;
  const LONG_MAX = longitude + longitudeDelta * RANGE;
  const LONG_MIN = longitude - longitudeDelta * RANGE;
  const LAT_MAX = latitude + latitudeDelta * RANGE;
  const LAT_MIN = latitude - latitudeDelta * RANGE;

  if (long > LONG_MIN && long < LONG_MAX) {
    if (latt > LAT_MIN && latt < LAT_MAX) return true;
  } else return false;
};

export const isDateInRange = (date, obj) => {
  if (obj.type === "event") {
    const DATE = new Date(date).getTime();
    const DATE_MIN = new Date(obj.startDate).getTime();
    const DATE_MAX = new Date(obj.endDate).getTime();
    return DATE_MIN > DATE || DATE > DATE_MAX ? false : true;
  } else return true;
};
