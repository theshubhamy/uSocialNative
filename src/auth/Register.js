import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Text, View, StyleSheet } from "react-native";
import { Snackbar, Button, TextInput } from "react-native-paper";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [hidePswd, setHidePswd] = useState(true);
  const onRegister = () => {
    if (
      name.length == 0 ||
      username.length == 0 ||
      email.length == 0 ||
      phone.length == 0 ||
      password.length == 0
    ) {
      setIsValid({
        bool: true,
        boolSnack: true,
        message: "Please fill out everything",
      });
      return;
    }
    if (password.length < 6) {
      setIsValid({
        bool: true,
        boolSnack: true,
        message: "passwords must be at least 6 characters",
      });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password, name, phone)
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
      <Snackbar
        visible={isValid.boolSnack}
        duration={2000}
        onDismiss={() => {
          setIsValid({ boolSnack: false });
        }}
      >
        {isValid.message}
      </Snackbar>
      <View style={styles.header}>
        <Text style={styles.headerText}>Register</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Username"
          value={username}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={(username) =>
            setUsername(
              username
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "")
                .replace(/[^a-z0-9]/gi, "")
            )
          }
        />
        <TextInput
          style={styles.input}
          label="Name"
          mode="outlined"
          value={name}
          keyboardType="default"
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          value={email}
          keyboardType="email-address"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          mode="outlined"
          value={phone}
          keyboardType="number-pad"
          style={styles.input}
          label="Phone"
          onChangeText={(phone) => setPhone(phone)}
        />
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Password"
          value={password}
          secureTextEntry={hidePswd}
          right={
            <TextInput.Icon
              icon={hidePswd ? "eye" : "eye-off"}
              onPress={() => setHidePswd(!hidePswd)}
            />
          }
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          mode="contained"
          onPress={() => onRegister()}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Register
        </Button>
      </View>
      <Text
        style={styles.helperText}
        onPress={() => props.navigation.navigate("Login")}
      >
        Already have an account? SignIn.
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
    borderRadius: 8,
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
