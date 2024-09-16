import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-file";
import MealDetails from "./MealDetails";
import Subtitle from "./Subtitle";
import List from "./List";
import IconButton from "./IconButton";

export default function MealDetailsItem({ id, colorMeal, navigation }) {
    const selectedMeal = MEALS.find((meal) => meal.id === id);

    return (
        <ScrollView style={{flex: 1, marginBottom: 14}}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                style={styles.detailText}
            />

            <Subtitle>
                Ingredients
            </Subtitle>

            <List colorList={colorMeal} data={selectedMeal.ingredients} />

            <Subtitle>
                Steps
            </Subtitle>

            <List colorList={colorMeal} data={selectedMeal.steps} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },

    detailText: {
        color: 'white'
    },

})
