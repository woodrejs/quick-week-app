import React from "react";
import { View, StyleSheet, Button } from "react-native";
import MapView, { Marker, Callout, CalloutSubview } from "react-native-maps";
import Pin from "../../img/pins/primary_pin.svg";
import DIMENSIONS from "../../constans/DIMENSIONS";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";

const CustomMap = () => {
  const latitude = useSelector((state) => state.map.location.latitude);
  const longitude = useSelector((state) => state.map.location.longitude);
  const delta = useSelector((state) => state.map.location.delta);

  const dispatch = useDispatch();

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: delta,
        longitudeDelta: delta,
      }}
    >
      <Marker coordinate={{ latitude, longitude }} style={styles.container}>
        <Pin width={50} height={50} />
        <Callout tooltip={true}>
          <View style={styles.call}></View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default CustomMap;

const styles = StyleSheet.create({});
/*
 <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 51.135607,
            longitude: 17.032331,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          }}
        >
          <Marker
            coordinate={{ latitude: 51.135607, longitude: 17.032331 }}
            style={styles.container}
          >
            <Pin width={50} height={50} />
            <Callout tooltip={true}>
              <View style={styles.call}></View>
            </Callout>
          </Marker>
        </MapView>


         <View
            style={{ ...styles.botBox, ...{ backgroundColor: COLORS.fifth } }}
          >
            <MapCategories />
          </View>
          
          import MapView, { Marker, Callout, CalloutSubview } from "react-native-maps";
import Pin from "../../img/pins/primary_pin.svg";
        */
