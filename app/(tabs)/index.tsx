import MyHomeAppContactForm from "@/components/MyHomeAppContactForm";
import { MyHomeAppContent } from "@/components/MyHomeAppContent";
import MyHomeAppFooter from "@/components/MyHomeAppFooter";
import { MyHomeAppHeader } from "@/components/MyHomeAppHeader";
import MyHomeAppImage from "@/components/MyHomeAppImage";
import MyHomeAppLoginPage from "@/components/MyHomeAppLoginPage";
import MyHomeAppMenuItems from "@/components/MyHomeAppMenuItems";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={indexStyles.container}>
        <MyHomeAppHeader />
        <MyHomeAppContent />
        {/* <MyHomeAppMenuItems /> */}
        {/* <MyHomeAppContactForm /> */}
        {/* <MyHomeAppLoginPage /> */}
        <MyHomeAppImage />
      </ScrollView>

      <View>{/* <MyHomeAppFooter /> */}</View>
    </>
  );
}

// styling fo index
const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1cfbd",
  },
});
