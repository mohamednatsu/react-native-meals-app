import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";

export default function CategoryItem({ title, color, onPress }) {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: `${color}` + `5678` }}
                style={styles.button}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        flex: 1,
    },

    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
