import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePswd, setHidePswd] = useState(true);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          style={styles.input}
          secureTextEntry={hidePswd}
          right={
            <TextInput.Icon
              icon={hidePswd ? "eye" : "eye-off"}
              onPress={() => setHidePswd(!hidePswd)}
            />
          }
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Login
        </Button>
      </View>
      <Text
        style={styles.helperText}
        onPress={() => props.navigation.navigate("Register")}
      >
        Don't have an account? SignUp.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%",
    height: "100%",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 30,
  },
  helperText: {
    fontSize: 16,
    color: "#0097a7",
    marginHorizontal: 6,
  },
  header: {
    backgroundColor: "#F5FCFF",
    marginVertical: 10,
    fontSize: 20,
  },
  headerText: {
    fontSize: 24,
    color: "#0097a7",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#0097a7",
  },
  buttonLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
