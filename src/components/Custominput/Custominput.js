import { View, TextInput, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';

const Custominput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View
                        style={[styles.container, { borderColor: error ? 'red' : '#e8e8e8' }]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch', marginLeft: 20 }} >{error.message || 'Error'} </Text>
                    )}
                </>
            )}

        />

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 25,

        paddingHorizontal: 50,
        marginVertical: 5,

    },
    input: {
        padding: 5
    },
});
export default Custominput;