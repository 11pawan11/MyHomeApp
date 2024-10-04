import { StyleSheet, Text, View } from "react-native";

export function MyHomeAppHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.innerTextStyles}>My Home App</Text>
    </View>
  );
}
//fo the styling the header
const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  innerTextStyles: {
    fontSize: 24,
    color: "white",
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
  },
});
