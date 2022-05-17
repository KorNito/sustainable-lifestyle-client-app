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

export default function RewardsScreen({ navigation }) {
  const [rewards, setRewards] = useState([]);
  const [showQrCode, setShowQrCode] = useState(false);
  const [selectedReward, setSelectedReward] = useState();
  const rewardsRef = collection(db, "rewards");

  useEffect(() => {
    getRewards();
  }, []);

  const getRewards = async () => {
    const data = await getDocs(rewardsRef);

    setRewards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const displayQrCode = (event, index) => {
    setSelectedReward(index);
    setShowQrCode(!showQrCode);
  };

  const closedQrCode = () => {
    setSelectedReward();
    setShowQrCode(!showQrCode);
  };

  return (
    <View>
      <FlatList
        data={rewards}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.list}>
            <Text>Reward name: {item.rewardName}</Text>
            <Text>Points: {item.points}</Text>
            {showQrCode && selectedReward == item.rewardName ? (
              <>
                <Button title="Close" onPress={closedQrCode}></Button>
                <QRCode value={item.data}></QRCode>
              </>
            ) : (
              <Button
                title="Redeem"
                onPress={(event) => displayQrCode(event, item.rewardName)}
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
