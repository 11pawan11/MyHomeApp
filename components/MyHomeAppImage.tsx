import { Image, StyleSheet, Text, View } from "react-native";

const MyHomeAppImage = () => {
  return (
    <View style={imageStyle.container}>
      <Image
        style={imageStyle.logo}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"This the react logo"}
        source={require("./../assets/images/cashless.svg")}
      />
      <Text style={imageStyle.texts}>Misson Cashless</Text>
    </View>
  );
};

//styling the logo
const imageStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  logo: {
    padding: 20,
    justifyContent: "center",
    width: 300,
    height: 300,
    marginBottom: 5,
    flexBasis: "auto",
  },
  texts: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default MyHomeAppImage;
