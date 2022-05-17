import React, { useState, useEffect } from "react";
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

export default function HomeScreen({ navigation }) {
  const [points, setPoints] = useState();
  const userPointsRef = doc(db, "users", "hPmRb3qLwyQWBdHhum8W");

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

    // const data = await getDoc(userPointsRef);

    // setChallenges(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
