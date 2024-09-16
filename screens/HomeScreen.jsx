import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
    function renderCategoriesScreen() {
        navigation.navigate("Meals Categories");
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets//home.jpg")} />
            <Text style={styles.titleHome}>Mealo App</Text>
            <Text style={styles.subtitleHome}>"To find the best recipes {"\n"} and meals to enjoy!"</Text>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={styles.button}
                onPress={renderCategoriesScreen}
            >
                <Text style={styles.buttonText}>Show All Categories</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        overflow: "hidden",
    },

    titleHome: {
        fontSize: 35,
        color: "white",
    },

    subtitleHome: {
        fontSize: 15,
        color: "#e2b497",
        marginHorizontal: 30, 
        textAlign: 'center',
        fontStyle: 'italic'
    },

    button: {
        backgroundColor: "#e2b497",
        padding: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: "black",
    },

    image: {
        width: 300,
        height: 350,
        borderRadius: 8,
        elevation: 4
    }
});
