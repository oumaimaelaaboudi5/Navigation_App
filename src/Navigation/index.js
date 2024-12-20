import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import React from 'react';

import SignInScreen from '../screens/Signinscreen/SigninScreen';
import SignUpScreen from '../screens/SignUpscreen/SignUpScreen';
import ConfirmEmail from '../screens/confirmEmail/ConfirmEmailScreen';
import ForgotPassword from '../screens/ForgotPassWord/ForgotPasswordScreen';
import NewPassword from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Signin" component={SignInScreen} />
                <Stack.Screen name="Signup" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="NewPassword" component={NewPassword} />
                <Stack.Screen name="Home" component={HomeScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;