import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function List({ data, colorList }) {
    return data.map((dataPoint) => (
        <View style={[styles.listItem, {backgroundColor: colorList}]} key={dataPoint}>
            <Text style={styles.listText}>{dataPoint}</Text>
        </View>
    ));
}


const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginVertical: 6,
        marginHorizontal: 20,
        
    },

    listText: {
        textAlign: 'center',
        color: "#180A0A"
    }
})