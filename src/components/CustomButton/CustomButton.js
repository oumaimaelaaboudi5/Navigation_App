import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
            ]} >
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {},
            ]}>
                {text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

        width: '90%',
        padding: 11,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 25,
    },
    container_PRIMARY: {
        backgroundColor: '#10ddc2',
    },
    container_SECONDARY: {
        borderColor: '#10ddc2',
        borderWidth: 2,
    },

    container_TERITIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_SECONDARY: {
        color: '#10ddc2',
    },
    text_TERTIARY: {
        color: 'gray',
    },

})

export default CustomButton