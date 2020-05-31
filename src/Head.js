import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Head = ({title}) => {
    return (
    <View style={styles.head}>
        <Text style ={styles.text}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create ({
    head: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#5db103',
        paddingBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 26,
    }
})