import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { appActions, markersActions } from "../actions";

const setMarkers = () => {
  const KEY = process.env.KEY;
  const FROM = new Date();
  const TO = new Date().setDate(new Date().getDate() + 7);
  const dispatch = useDispatch();

  const URL_PLACES = `https://go.wroclaw.pl/api/v1.0/places/?key=${KEY}&time-from=${FROM}&time-to=${TO}&page-size=200&type-id=10`;
  const URL_EVENTS = `https://go.wroclaw.pl/api/v1.0/offers/?key=${KEY}&time-from=${FROM}&time-to=${TO}&page-size=200`;

  const getMarkers = useCallback((url, fnc, type) => {
    fetch(url)
      .then((response) => response.json())
      .then(({ items, next }) => {
        if (next === undefined) {
          type === "places" && dispatch(appActions.setPlacesMarkersLoaded());
          type === "events" && dispatch(appActions.setEventsMarkersLoaded());
        } else {
          getMarkers(next, fnc, type);
        }
        dispatch(fnc(items));
      });
  }, []);

  useEffect(() => {
    getMarkers(URL_PLACES, markersActions.setPlacesMarkers, "places");
    getMarkers(URL_EVENTS, markersActions.setEventsMarkers, "events");
  }, []);
};

export default setMarkers;
