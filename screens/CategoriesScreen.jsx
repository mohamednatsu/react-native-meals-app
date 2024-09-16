import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-file";
import CategoryItem from "../components/CategoryItem";

export default function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("Meals Overview", {
                categoryId: itemData.item.id,
                colorItem: itemData.item.color
            });
        }

        return (
            <CategoryItem
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={CATEGORIES}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCategoryItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 30,
    },
});
