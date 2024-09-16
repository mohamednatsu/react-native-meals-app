import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

export default function MealItem({
    id,
    title,
    imageUrl,
    complexity,
    affordability,
    duration,
    colorR,
}) {
    const navigator = useNavigation();

    function navigateMealDetails() {
        navigator.navigate("MealsDetails", {
            mealId: id,
            mealColor: colorR
        });
    }

    return (
        <View style={styles.itemContainer}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={navigateMealDetails}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        affordability={affordability}
                        duration={duration}
                        complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        // padding: 12,
        // paddingVertical: 6,
        elevation: 4,
    },
    image: {
        height: 200,
        width: "100%",
        // borderRadius: 5
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        margin: 8,
    },
    details: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 8,
        paddingVertical: 30,
    },
    detailsItem: {
        marginHorizontal: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    buttonPressed: {
        opacity: 0.5,
    },
});
