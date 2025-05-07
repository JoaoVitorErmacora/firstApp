import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

import AntiDesign from "" {  }

export default function App() {
  const changeText = () => {
    console.log("Foi digitado algo no TEXT INPUT");
  };
  

  return (
    <ImageBackground
      style={styles.container}
      source={require("./src/assets/images/campeao2.jpg")}
      resizeMode="cover"
    >
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        secureTextEntry={true}
        placeholderTextColor="red"
        inputMode={"numeric"}
        autoCapitalize="characthers"
        multiline={true}
        onChangeText={changeText}
      />

      {/* <Button
        title="Click me!"
        color="#ff0000"
        onPress={() => alert("Você apertou no botão")}
      /> */}

      <TouchableOpacity style={styles.btn}>
        <Text>CLick me!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "#000",
  },
  input: {
    width: 300,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ff0000",
  },
  image: {
    width: 100,
    height: 100,
  },
  btn: {
    width: 100,
    padding: 10,
    backgroundColor: "ff0000",
    color: "#000",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ff0000",
  },
});

{
  /* <View style={[styles.container, { backgroundColor: "#fff" }]}>
      <Text style={styles.text}> ALO MUNDO! :D</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        secureTextEntry={true}
        placeholderTextColor="red"
        inputMode={"numeric"}
        autoCapitalize="characthers"
        multiline={true}
        onChangeText={changeText}
      />
    </View> */
}
