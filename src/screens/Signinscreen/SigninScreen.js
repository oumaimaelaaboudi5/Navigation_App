import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Text, TextInput } from 'react-native';
import React from 'react';
import Logo from '../../../assets/images/way.png';
import Custominput from '../../components/Custominput/Custominput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSigninButtons from '../../components/socialSigninButtons/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SigninScreen = () => {

    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const onSigninPressed = data => {
        console.log(data);
        //validate user
        navigation.navigate('Home');
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }
    const onSignUpPressed = () => {
        navigation.navigate('Signup');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo}
                    style={[styles.logo, { height: height * 0.11 }]} />
                <Text style={styles.title}>Login to your account</Text>
                <Custominput
                    name="Email"
                    placeholder="Email"
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Email is invalid'
                        }
                    }}
                    control={control}
                />
                <Custominput
                    name="Password"
                    placeholder="Password"
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
                <CustomButton text="Sign in"
                    onPress={handleSubmit(onSigninPressed)} />
                <CustomButton text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY" />

                <SocialSigninButtons />

                <Text style={styles.text_one}>
                    Don't have an account ? {''}
                    <Text style={styles.text}
                        onPress={onSignUpPressed}>Create One </Text>
                </Text>

            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    logo: {
        marginTop: 100,
        marginLeft: 30,
        maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        width: '80%',
        marginTop: 30,
        marginVertical: 10,
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 15
    },
    text_one: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
        margin: 40,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#10ddc2',
        margin: 10,
    },
});
export default SigninScreen;