import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Custominput from '../../components/Custominput/Custominput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSigninButtons from '../../components/socialSigninButtons/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {

    const navigation = useNavigation();
    const { control, handleSubmit, watch } = useForm();

    const pwd = watch('Password');

    const onRegisterPressed = data => {
        console.log(data);
        navigation.navigate('ConfirmEmail');
    }
    const onTermsOfUsePressed = () => {
        console.warn("Terms Of Use");
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy");
    }
    const onSignInPressed = () => {
        navigation.navigate('Signin');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
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
                    control={control} />
                <Custominput
                    name="Username"
                    placeholder="Username"
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 5,
                            message: 'Username should be at least 5 characters long'
                        },
                        maxLength: {
                            value: 25,
                            message: 'Username should be max 25 characters long'
                        },
                    }}
                    control={control} />

                <Custominput
                    name="Phone Number"
                    placeholder="Phone Number"
                    rules={{ required: 'Phone Number is required' }}
                    control={control} />

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
                            message: 'Password should be max 10 characters long'
                        },
                    }}
                    control={control}
                    secureTextEntry />

                <Custominput
                    name="Repeat Password"
                    placeholder="Repeat Password"
                    rules={{
                        validate: value =>
                            value === pwd || 'Password do not match',
                    }}
                    control={control}
                    secureTextEntry />

                <CustomButton text="Register"
                    onPress={handleSubmit(onRegisterPressed)} />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our {''}
                    <Text style={styles.link}
                        onPress={onTermsOfUsePressed}>Terms of Use </Text>
                    and<Text style={styles.link}
                        onPress={onPrivacyPolicyPressed}> Privacy Policy
                    </Text>
                </Text>

                <SocialSigninButtons />

                <Text style={styles.text_one}>
                    Have an account ? {''}
                    <Text style={styles.text_two}
                        onPress={onSignInPressed}>Sign in </Text>
                </Text>
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
    link: {
        color: '#FDB075'
    },
    text_one: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
        margin: 10,
    },
    text_two: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#10ddc2',
        margin: 10,
    }
});
export default SignUpScreen;