import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  ref,
} from "firebase/firestore";

export default function MapScreen({ navigation }) {
  const [places, setPlaces] = useState([]);
  const placesRef = collection(db, "places");

  useEffect(() => {
    getPlaces();
  }, []);

  const getPlaces = async () => {
    const data = await getDocs(placesRef);

    setPlaces(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

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
      {places.map((place) => (
        <MapView.Marker
          coordinate={{
            latitude: parseFloat(place.latitude),
            longitude: parseFloat(place.longitude),
          }}
          title={place.placeName}
        />
      ))}
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
