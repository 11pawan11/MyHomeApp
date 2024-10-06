import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

const MyHomeAppContactForm = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [message, onChangeMessage] = useState("");
  return (
    <KeyboardAvoidingView
      style={contactForm.container}
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={contactForm.texts}>Welcome to Contact Form</Text>
        <Text style={contactForm.texts}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sint.
          Natus nesciunt numquam, placeat officia quod cumque consectetur
          voluptates esse sint vero doloremque ullam, architecto dolorem?
          Architecto inventore alias voluptatum!
        </Text>
        <ScrollView style={contactForm.mainView}>
          <Text style={contactForm.inputText}>First Name</Text>
          <TextInput
            style={contactForm.input}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder="Enter your firstName"
          />
          <Text style={contactForm.inputText}>Last Name</Text>
          <TextInput
            style={contactForm.input}
            value={lastName}
            secureTextEntry={true}
            onChangeText={onChangeLastName}
            placeholder="Enter your lastName"
            inputMode="numeric"
          />
          <Text style={contactForm.inputText}>Message</Text>
          <TextInput
            style={contactForm.messageInput}
            value={message}
            onChangeText={onChangeMessage}
            placeholder="Enter your message"
            multiline={true}
            maxLength={250}
          />
        
        </ScrollView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

//styling the component s

const contactForm = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: "",
    color: "white",
  },
  texts: {
    fontSize: 20,
    color: "black",
    alignContent: "center",
    textAlign: "center",
  },
  input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    fontSize: 15,
  },
  messageInput: {
    justifyContent: "flex-start",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    fontSize: 15,
    height: 100,
  },

  inputText: {
    fontSize: 20,
    color: "black",
  },
  mainView: {
    backgroundColor: "",
    flex: 1,
  },
});

export default MyHomeAppContactForm;
