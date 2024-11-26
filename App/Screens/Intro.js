import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Dimensions, Text } from "react-native";
import Colors from "../misc/Colors";
import RoundiconBtn from "../Components/RoundiconBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Intro = () => {
  const [name, setName] = useState("");

  const handleonChangeText = (text) => setName(text);

  const handleSubmit = async () => {
    const user = { name };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    console.log("Usuário salvo:", user); 
  };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.InputTitle}>Coloque seu nome para continuar.</Text>
        <TextInput
          value={name}
          onChangeText={handleonChangeText}
          placeholder="Coloque seu nome"
          style={styles.TextInput}
        />
        {name.trim().length >= 3 ? (
          <RoundiconBtn antIconName="arrowright" onPress={handleSubmit} />
        ) : null}
      </View>
    </>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    width: width - 50,
    height: 40,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
  },
  InputTitle: {
    alignSelf: "flex-start",
    paddingLeft: 27,
    marginBottom: 3,
    opacity: 0.5,
  },
});

export default Intro;
