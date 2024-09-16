import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem';

export default function MealList({displayMeals, color}) {
    function renderMealItem(itemData) {
        const item = itemData.item

        const mealItemProps = {
            id: item.id,
            title: item.title,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            imageUrl: item.imageUrl,
            colorR: color
        }

        return <MealItem {...mealItemProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});