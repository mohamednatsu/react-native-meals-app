import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({name, color, size, onPress}) {
    return (
        <View>
            <Ionicons name={name} size={size} color={color} onPress={onPress}/>
        </View>
    )
}