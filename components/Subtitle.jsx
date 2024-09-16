import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
        textAlign: 'center'
    },
    
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497',
    }
})