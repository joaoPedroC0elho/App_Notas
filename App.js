import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import Intro from './App/Screens/Intro';
import React, {useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function App() {
  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");
    if (result) {
      console.log("Usuário encontrado:", JSON.parse(result));
    }
  };

  useEffect(() => {
    findUser()
  }, []);
  return (<Intro/>);
    
}

const styles = StyleSheet.create({
  
});
