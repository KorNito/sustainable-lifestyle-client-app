import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
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
import QRCode from "react-native-qrcode-svg";

export default function ChallengesScreen({ navigation }) {
  const [challenges, setChallenges] = useState([]);
  const [showQrCode, setShowQrCode] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState();
  const challengesRef = collection(db, "challenges");

  useEffect(() => {
    getChallenges();
  }, []);

  const getChallenges = async () => {
    const data = await getDocs(challengesRef);

    setChallenges(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const displayQrCode = (event, index) => {
    setSelectedChallenge(index);
    setShowQrCode(!showQrCode);
  };

  const closedQrCode = () => {
    setSelectedChallenge();
    setShowQrCode(!showQrCode);
  };

  return (
    <View>
      <FlatList
        data={challenges}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.list}>
            <Text>Challenge name: {item.challengeName}</Text>
            <Text>Points: {item.points}</Text>
            <Text>Start date: {item.startDate}</Text>
            <Text>End date: {item.endDate}</Text>
            {showQrCode && selectedChallenge == item.challengeName ? (
              <>
                <Button title="Close" onPress={closedQrCode}></Button>
                <QRCode value={item.data}></QRCode>
              </>
            ) : (
              <Button
                title="Complete"
                onPress={(event) => displayQrCode(event, item.challengeName)}
              ></Button>
            )}
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
