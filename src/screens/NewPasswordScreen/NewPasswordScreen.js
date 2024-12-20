import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Custominput from '../../components/Custominput/Custominput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const NewPassword = () => {

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();


    const onSubmitPressed = () => {
        navigation.navigate('Home');
    }
    const onSignInPressed = data => {
        console.log(data);
        navigation.navigate('Signin');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <Custominput
                    name="Code"
                    placeholder="Code"
                    rules={{
                        required: 'Code is required',
                    }}
                    secureTextEntry
                    control={control} />

                <Custominput
                    name=" New password"
                    placeholder="New password"
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be at least 10 characters long'
                        },
                        maxLength: {
                            value: 10,
                            message: 'Password should be max 15 characters long'
                        },
                    }}
                    secureTextEntry
                    control={control} />

                <CustomButton text="Submit"
                    onPress={onSubmitPressed} />

                <CustomButton text="Back to Sign in "
                    onPress={handleSubmit(onSignInPressed)}
                    type="TERTIARY" />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        marginTop: 80,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#10ddc2',
        margin: 10,
    },
    text: {
        width: '85%',
        color: 'gray',
        marginVertical: 10,
    },

});
export default NewPassword;