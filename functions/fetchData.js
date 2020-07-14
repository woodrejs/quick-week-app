import { convertPlace, convertEvent } from "./convertData";

export const fetchCategories = async (type) => {
  const KEY = process.env.KEY;
  const URL = type
    ? `https://go.wroclaw.pl/api/v1.0/categories/for-places/?key=${KEY}`
    : `https://go.wroclaw.pl/api/v1.0/categories/for-offers/?key=${KEY}`;

  const response = await fetch(URL);
  const data = await response.json();
  return data.items.map(({ id, name }) => ({ id, name }));
};

export const fetchMarkers = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  const moreItems = data.next;
  let items = moreItems
    ? data.items.concat(await fetchMarkers(moreItems))
    : data.items;

  return items;
};

export const fetchPlace = async (id) => {
  const KEY = process.env.KEY;
  const URL = `https://go.wroclaw.pl/api/v1.0/places/${id}/?key=${KEY}`;

  const response = await fetch(URL);
  const data = await response.json();

  return convertPlace(data);
};

export const fetchEvent = async (id) => {
  const KEY = process.env.KEY;
  const URL = `https://go.wroclaw.pl/api/v1.0/events/${id}/?key=${KEY}`;

  const response = await fetch(URL);
  const data = await response.json();

  return convertEvent(data);
};
