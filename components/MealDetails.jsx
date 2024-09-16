import { View, Text, StyleSheet } from 'react-native'


export default function MealDetails({duration, complexity, affordability, style}) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, style]}>
                {duration}m
            </Text>
            <Text style={[styles.detailsItem,style]}>
                {complexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailsItem, style]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
        paddingVertical: 30
    },
    detailsItem: {
        marginHorizontal: 8
    },
})