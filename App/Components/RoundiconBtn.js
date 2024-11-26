import React from "react";
import { View, StyleSheet } from "react-native";
import {AntDesign} from '@expo/vector-icons';
import Colors from "../misc/Colors";


const RoundiconBtn = ({antIconName, size, color, onPress, style}) =>{
    return (
    <AntDesign 
        name = {antIconName} 
        size={size || 24 } 
        color={color || Colors.DARK}
        style = {[styles.icon,{...style}]}
        onPress={onPress}
    />
    ); 
};

const styles = StyleSheet.create({
    icon:{
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 50,
        elevation: 5,
    },
});

export default RoundiconBtn;