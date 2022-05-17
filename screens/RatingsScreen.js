import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
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

export default function RatingsScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(usersRef);

    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.list}>
            <Text>Username: {item.userName}</Text>
            <Text>Total points: {item.totalPoints}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,21,21,0.1)",
  },
  list: {
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
});
