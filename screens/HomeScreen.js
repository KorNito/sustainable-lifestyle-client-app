import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { UserContext } from "../context/UserContext";

export default function HomeScreen({ navigation }) {
  const [points, setPoints] = useState();

  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getUserPoints();
  }, []);

  const getUserPoints = async () => {
    const myDoc = doc(db, "users", "hPmRb3qLwyQWBdHhum8W");

    getDoc(myDoc)
      .then((snapshot) => {
        if (snapshot.exists) {
          setPoints(snapshot.data());
        } else {
          alert("No Doc Found");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {points != null && <Text>Current points: {points.points}</Text>}
      </Text>
    </View>
  );
}
