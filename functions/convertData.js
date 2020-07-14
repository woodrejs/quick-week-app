export const convertPlace = (obj) => {
  return {
    id: obj.id,
    title: obj.title,
    externalLink: obj.externalLink,
    longDescription: obj.longDescription,
    categories: obj.categories,
    images: obj.images,
    latt: obj.location.lattiude,
    long: obj.location.longitude,
    street: obj.address.street,
    telephone: obj.venue.telephone,
    email: obj.venue.email,
    carParkAvailable: obj.venue.carParkAvailable,
  };
};

export const convertEvent = (obj) => {
  return {
    id: obj.id,
    startDate: obj.startDate,
    endDate: obj.endDate,
    latt: obj.location.lattiude,
    long: obj.location.longitude,
    street: obj.address.street,
    place: obj.placeName,
    title: obj.offer.title,
    longDescription: obj.offer.longDescription,
    externalLink: obj.offer.externalLink,
    images: obj.offer.images,
    categories: obj.offer.categories,
    telephone: obj.place.venue.telephone,
    email: obj.place.venue.email,
    carParkAvailable: obj.place.venue.carParkAvailable,
  };
};

export const convertDescription = (text) => {
  if (text) return text.replace(/<[^>]*>/g, "").replace(/&\D*;/g, "");
};

export const convertEventMarker = (obj) => {
  const { title, longDescription } = obj;
  const events = obj.events[0];
  return {
    id: events.id,
    title,
    longDescription,
    street: events.address.street,
    latitude: events.location.lattiude,
    longitude: events.location.longitude,
    placeName: events.placeName,
    type: false,
    startDate: events.startDate.slice(0, 10),
    endDate: events.endDate.slice(0, 10),
  };
};

export const convertPlaceMarker = (obj) => {
  const { id, title, longDescription, address, location } = obj;
  return {
    id,
    title,
    longDescription,
    street: address.street,
    latitude: location.lattiude,
    longitude: location.longitude,
    type: true,
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
