export const convertDescription = (text) => {
  if (text) return text.replace(/<[^>]*>/g, "").replace(/&\D*;/g, "");
};

export const convertPlace = (obj) => {
  return {
    id: obj.id,
    title: obj.title || "brak",
    externalLink: obj.externalLink || null,
    longDescription: convertDescription(obj.longDescription) || "brak",
    categories: obj.categories || null,
    images: obj.images || null,
    street: obj.address.street || "brak",
    telephone: obj.venue.telephone.split(",")[0] || "brak",
    email: obj.venue.email.split(",")[0] || "brak",
    carParkAvailable: obj.venue.carParkAvailable
      ? "parking dostępny"
      : "brak parkingu",
    type: true, // true for place
  };
};

export const convertEvent = (obj) => {
  return {
    id: obj.id,
    title: obj.offer.title || "brak",
    longDescription: convertDescription(obj.offer.longDescription) || "brak",
    externalLink: obj.offer.externalLink || null,
    images: obj.offer.images || null,
    categories: obj.offer.categories || null,
    startDate: obj.startDate.replace("T", " ") || "brak",
    street: obj.address.street || "brak",
    place: obj.placeName || "brak",
    ticketing: obj.ticketing,
    type: false, // false for event
  };
};

export const convertEventMarker = (obj) => {
  const { title, longDescription } = obj;
  const events = obj.events[0];
  return {
    id: events.id,
    title,
    longDescription: convertDescription(longDescription),
    street: events.address.street,
    latitude: events.location.lattiude,
    longitude: events.location.longitude,
    type: false, //false for event
  };
};

export const convertPlaceMarker = (obj) => {
  console.log(obj);
  const { id, title, longDescription, address, location } = obj;
  return {
    id,
    title,
    longDescription: convertDescription(longDescription),
    street: address.street,
    latitude: location.lattiude,
    longitude: location.longitude,
    type: true, // true for place
  };
};

export const convertEventsSearch = (obj) => {
  const { id, offer, location } = obj;
  const { title, mainImage } = offer;
  const { lattiude, longitude } = location;
  return {
    id,
    title,
    image: mainImage.standard,
    latt: lattiude,
    long: longitude,
  };
};

export const convertPlacesSearch = (obj) => {
  const { id, title, mainImage, location } = obj;
  const { lattiude, longitude } = location;
  return {
    id,
    title,
    image: mainImage.standard,
    latt: lattiude,
    long: longitude,
  };
};
