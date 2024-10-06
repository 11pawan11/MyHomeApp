import { StyleSheet, Text, View } from "react-native";

export default function MyHomeAppFooter() {
  return (
    <View style={footerStyles.containerFooter}>
      <Text style={footerStyles.innerFooterText}>
        All Right Reserved, Copyright to @2024 My Home
      </Text>
    </View>
  );
}

//styling fo teh footer
const footerStyles = StyleSheet.create({
  containerFooter: { backgroundColor: "#484847" },
  innerFooterText: {
    fontWeight: "semibold",
    padding: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
});
