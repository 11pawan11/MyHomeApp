import { MyHomeAppContent } from "@/components/MyHomeAppContent";
import MyHomeAppFooter from "@/components/MyHomeAppFooter";
import { MyHomeAppHeader } from "@/components/MyHomeAppHeader";
import MyHomeAppMenuItems from "@/components/MyHomeAppMenuItems";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View style={indexStyles.container}>
        <MyHomeAppHeader />
        <MyHomeAppContent />
        {/* <MyHomeAppMenuItems /> */}
      </View>

      <View>
        <MyHomeAppFooter />
      </View>
    </>
  );
}

// styling fo index
const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f3f1",
  },
});
