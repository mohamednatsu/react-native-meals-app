import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-file";
import MealItem from "../components/MealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealList from "../components/MealsList/MealList";

export default function MealsOverviewScreen({ route, navigation }) {
    const catID = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catID
        ).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catID, navigation])

    return (
        <MealList displayMeals={displayMeals} color={route.params.colorItem} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
