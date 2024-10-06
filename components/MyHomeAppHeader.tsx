import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MyHomeAppMenuItems from "./MyHomeAppMenuItems";

export function MyHomeAppHeader() {
  const [clickable, setClickable] = useState(false);
  return (
    <View style={headerStyles.container}>
      <Pressable onPress={() => setClickable(!clickable)}>
        <Image
          style={headerStyles.menuLogo}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={"This the react logo"}
          source={require("./../assets/images/menu.svg")}
        />
      </Pressable>
      <View style={headerStyles.innerContainer}>
        <Image
          style={headerStyles.logo}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={"This the react logo"}
          source={require("./../assets/images/gharbeti.png")}
        />
        <Text style={headerStyles.innerTextStyles}>My Home App</Text>
      </View>
      {clickable && <MyHomeAppMenuItems showMenus={clickable} />}
    </View>
  );
}
//for the styling the header
const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#1d8348",
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingHorizontal: 8,
    padding: 4,
    justifyContent: "space-between",
  },
  innerContainer: {
    backgroundColor: "#1d8348",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  innerTextStyles: {
    fontSize: 20,
    alignItems: "center",
    color: "white",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 40,
  },
  menuLogo: {
    width: 25,
    height: 25,
  },
});
