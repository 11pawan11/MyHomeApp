import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const MyHomeAppLoginPage = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [login, setLogin] = useState(false);
  return (
    <View style={loginStyle.container}>
      {!login && (
        <Text style={loginStyle.text}>Welcome to My Home App login Page</Text>
      )}
      {!login && (
        <View style={loginStyle.innerContainer}>
          <Text style={loginStyle.texts}>Login to Continue</Text>

          <TextInput
            style={loginStyle.input}
            placeholder="Enter your email"
            inputMode="email"
            value={email}
            onChangeText={onChangeEmail}
            onFocus={() => {
              Alert.alert("This is the alert message");
            }}
            onBlur={() => {
              Alert.alert("this is blurred message");
            }}
            clearButtonMode={"always"}
          />
          <TextInput
            style={loginStyle.input}
            value={password}
            secureTextEntry={true}
            onChangeText={onChangePassword}
            placeholder="Enter your password"
          />
        </View>
      )}
      <Pressable style={loginStyle.button} onPress={() => setLogin(!login)}>
        {login ? (
          <Text style={loginStyle.innerLoginSuccessbutton}>
            {"Login Sucessfully"}
          </Text>
        ) : (
          <Text style={loginStyle.innerLoginbuttonText}>{"Login "}</Text>
        )}
      </Pressable>
    </View>
  );
};

//this is for styling

const loginStyle = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  innerContainer: {
    flex: 0.35,
    justifyContent: "center",
  },
  text: {
    color: "red",
    textAlign: "center",
    fontSize: 25,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "black",
    borderRadius: 200,
    alignItems: "center",
  },
  texts: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
    padding: 10,
  },
  input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    fontSize: 15,
    marginBottom: 5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    color: "white",
    marginBottom: 5,
    textAlign: "center",
    alignItems: "center",
    margin: 80,
    marginVertical: 8,
    fontSize: 20,
    flex: 0.45,
  },
  innerLoginSuccessbutton: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
    color: "white",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  innerLoginbuttonText: {
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
    padding: 10,
    borderRadius: 12,
  },
});
export default MyHomeAppLoginPage;
