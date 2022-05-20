import * as React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function MapScreen({ navigation }) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 54.72265158267162,
        longitude: 25.337844138601618,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: 54.72339314409896,
          longitude: 25.337868064009417,
        }}
        title={"title"}
        description={"description"}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
