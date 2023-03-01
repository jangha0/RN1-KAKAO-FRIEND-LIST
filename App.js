import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { friendProfiles, myProfile } from "./src/data";
import Division from "./src/Division";
import FriendList from "./src/FriendList";
import FriendSection from "./src/FriendSection";
import Header from "./src/Header";
import Margin from "./src/Margin";
import Profile from "./src/Profile";
// import Ass from "components/Ass";

// const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const onPressArrow = () => {
    console.log("clicked arrow");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left"]}>
        <Header />
        
        <Margin height={10} />

        <Profile
          local={myProfile.local}
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
        />

        {/* <FriendList data={friendProfiles} /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // paddingTop: statusBarHeight,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
});
