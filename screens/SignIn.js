import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitSignIn = () => {
    if (email.length < 5) {
      setError("Enter A Valid Email Adress");
    } else if (password.length < 2) {
      setError("Enter A Valid Password");
    } else {
      alert("Done");
    }
  };
  return (
    <>
      <View style={styles.leftCircle}></View>
      <View style={styles.rightCircle}></View>
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME BACK !</Text>
        <View style={styles.formContainer}>
          <View style={styles.emailInput}>
            <Text style={styles.formLabel}>EMAIL ADRESS</Text>
            <TextInput
              style={styles.formField}
              onChangeText={(email) => setEmail(email)}
              value={email}
              autoCapitalize={false}
            />
          </View>

          <View style={styles.passwordInput}>
            <Text style={styles.formLabel}>PASSWORD</Text>
            <TextInput
              style={styles.formField}
              onChangeText={(password) => setPassword(password)}
              value={password}
              secureTextEntry
              autoCapitalize={false}
            />
          </View>

          <TouchableOpacity style={styles.signInBtn} onPress={submitSignIn}>
            <Text style={styles.signInBtnText}>SIGN IN</Text>
          </TouchableOpacity>
          {/* SIGN UP REDIRECTION */}
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>
              New To Global Gallery App{" "}
              <Text style={{ color: "#23A6D5" }}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 250,
  },
  leftCircle: {
    backgroundColor: "#9729ff",
    width: 230,
    height: 230,
    borderRadius: 150,
    position: "absolute",
    top: -50,
    left: -50,
  },
  rightCircle: {
    backgroundColor: "#23A6D5",
    width: 330,
    height: 330,
    borderRadius: 250,
    position: "absolute",
    top: -150,
    right: -50,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#9729ff",
  },
  formContainer: {
    marginLeft: 64,
    marginTop: 32,
    marginRight: 32,
  },
  formLabel: {
    color: "#8e93a1",
    paddingTop: 20,
  },
  formField: {
    borderBottomWidth: 1,
    borderBottomColor: "#8e93a1",
    marginTop: 10,
    paddingBottom: 5,
    color: "#9729ff",
    fontWeight: "bold",
  },
  signInBtn: {
    backgroundColor: "#9729ff",
    padding: 15,
    borderRadius: 5,
    marginTop: 40,
  },
  signInBtnText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  signUpText: {
    color: "#9729ff",
    fontWeight: "bold",
    paddingTop: 15,
    textAlign: "center",
  },
});