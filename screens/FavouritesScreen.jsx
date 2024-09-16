import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import MealList from "../components/MealsList/MealList";
import { MEALS } from "../data/dummy-file";
import { useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";

export default function FavouritesScreen({route}) {
    // const favoriteMealCtx = useContext(FavoritesContext);

    const favoritesMealsIds = useSelector((state) => state.favoriteMeal.ids)

    const favoritesMeals = MEALS.filter((meal) =>
        favoritesMealsIds.includes(meal.id)
    );


    if (favoritesMeals.length === 0) {
        return <View style={styles.rootContiner}>
            <Text style={styles.textStyle}>
                You don't have favorites Meals yet.
            </Text>
        </View>
    }

    return <MealList displayMeals={favoritesMeals} color={"#0ff"}/>;
}


const styles = StyleSheet.create({
    rootContiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textStyle: {
        color: "#e2b497",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
