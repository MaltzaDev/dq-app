import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/colors";
import SIZES from "../constants/sizes";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Test Message");

  function login() {
    fetch("http://192.168.100.20:3000/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        setMessage(text);
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Welcome back!</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: COLORS.secondary }]}
          onPress={() => {
            login();
            setMessage("");
          }}
          underlayColor={COLORS.white}
        >
          <Text style={{ ...styles.buttonText, color: COLORS.white }}>
            Login
          </Text>
        </TouchableHighlight>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  body: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.grey,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
    shadowColor: COLORS.black,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.title,
    fontWeight: "bold",
    alignSelf: "center",
    textShadowColor: COLORS.black,
    textShadowOffset: {
      width: 1,
      height: 2,
    },
    textShadowRadius: 10,
  },
  buttons: {
    flex: 2,
    justifyContent: "center",
  },
  button: {
    height: 48,
    width: 300,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    fontSize: SIZES.buttonText,
    fontWeight: "bold",
    alignSelf: "center",
    textShadowColor: COLORS.black,
    textShadowOffset: {
      width: 0.5,
      height: 1,
    },
    textShadowRadius: 4,
  },
  input: {
    height: 48,
    width: 300,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 12,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
    paddingLeft: 12,
  },
  message: {
    color: COLORS.black,
    fontSize: SIZES.smallText,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
});

export default Login;
