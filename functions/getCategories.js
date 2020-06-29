const getCategories = (URL, fnc, dispatch) => {
  fetch(URL)
    .then((resp) => resp.json())
    .then(({ items }) => {
      const categories = items.map((item) => ({
        name: item.name,
        id: item.id,
      }));

      dispatch(fnc(categories));
    })
    .catch((err) => console.log(err));
};
export default getCategories;
