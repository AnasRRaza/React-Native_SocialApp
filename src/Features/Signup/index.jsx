import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { validateEmail, validatePassword, validateUserName } from "../../Common/utils";

const SignUp = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");


  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <Input
        placeholder="Enter your name"
        value={name}
        error={nameError}
        onChangeText={(value) => {
          setName(value);
          const error = validateUserName(name);
          setNameError(error);
        }}
      />
      <Input
        placeholder="Enter Email"
        type="email-address"
        value={email}
        error={emailError}
        onChangeText={(value) => {
          setEmail(value);
          const error = validateEmail(email);
          setEmailError(error);
        }}
      />
      <Input
        placeholder="Enter Password"
        value={password}
        error={passwordError}
        onChangeText={(value) => {
          setPassword(value);
          const error = validatePassword(name);
          setPasswordError(error);
        }}
      />

      <Button
        title="Submit"
        onclick={() => console.log("Running...")}
      />
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: "5%",
  },
  title: {
    fontSize: 34,
    color: "#000",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
    marginBottom: 16,
  }
})