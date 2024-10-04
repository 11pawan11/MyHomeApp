import { ScrollView, StyleSheet, Text, View } from "react-native";

export const MyHomeAppContent = () => {
  return (
    <View style={contentStyles.container}>
      <ScrollView
        indicatorStyle={"white"}
        horizontal={false}
        style={contentStyles.innerContainerView}
      >
        <Text style={contentStyles.welcomeText}>Welcome to My Home App</Text>
        <Text style={contentStyles.contentText}>
          This is the app for the make the convinet for owner and roomies. This
          is the app for the make the convinet for owner and roomies Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Repellendus quasi
          laudantium laboriosam, cum nisi debitis. Cupiditate, vel iste atque
          repellendus recusandae delectus nobis, enim ea nam laudantium natus
          quaerat asperiores?
        </Text>
      </ScrollView>
    </View>
  );
};

//this is for styling the containers
const contentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainerView: {
    padding: 10,
  },
  welcomeText: {
    fontSize: 40,
    textAlign: "center",
    padding: 20,
    color: "#262a2a",
  },
  contentText: {
    color: "#262a2a",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
  },
});
