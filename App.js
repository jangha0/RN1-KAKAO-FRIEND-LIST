import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { friendProfiles, myProfile } from "./src/data";
import Division from "./src/Division";
import FriendList from "./src/FriendList";
import FriendSection from "./src/FriendSection";
import Header from "./src/Header";
import Margin from "./src/Margin";
import Profile from "./src/Profile";
import TabBar from "./src/TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Header />

        <Margin height={10} />

        <Profile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />

        <Margin height={15} />

        <Division />

        <Margin height={12} />

        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
        />

        <FriendList data={friendProfiles} isOpened={isOpened} />
      </View>

      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
});
