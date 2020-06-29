const isDateInRange = (date, obj) => {
  if (obj.type === "event") {
    const DATE = new Date(date).getTime();
    const DATE_MIN = new Date(obj.startDate).getTime();
    const DATE_MAX = new Date(obj.endDate).getTime();
    return DATE_MIN > DATE || DATE > DATE_MAX ? false : true;
  } else return true;
};
export default isDateInRange;
