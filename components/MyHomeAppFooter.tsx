import { StyleSheet, Text, View } from "react-native";

export default function MyHomeAppFooter() {
  return (
    <View style={footerStyles.containerFooter}>
      <Text style={footerStyles.innerFooterText}>
        Copyright to @2024 My Home
      </Text>
    </View>
  );
}

//styling fo teh footer
const footerStyles = StyleSheet.create({
  containerFooter: { backgroundColor: "red" },
  innerFooterText: {
    fontWeight: "semibold",
    padding: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
});
