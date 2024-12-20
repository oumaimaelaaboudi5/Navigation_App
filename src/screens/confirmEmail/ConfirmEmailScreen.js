import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Custominput from '../../components/Custominput/Custominput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const ConfirmEmail = () => {

    const { control, handleSubmit, watch } = useForm();
    const navigation = useNavigation();
    //const Email = watch('Email');
    const onConfirmPressed = () => {
        navigation.navigate('Home');
    }
    const onResendPressed = () => {
        console.warn("onResendPressed");
    }
    const onSignInPressed = () => {
        navigation.navigate('Signin');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>

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
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{
                        required: 'Confirmation code is required',
                    }}
                />

                <CustomButton text="Confirm"
                    onPress={handleSubmit(onConfirmPressed)} />

                <CustomButton text="Resend Code "
                    onPress={onResendPressed}
                    type="SECONDARY" />

                <CustomButton text="Back to Sign in "
                    onPress={onSignInPressed}
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
    link: {
        color: '#FDB075'
    },
});
export default ConfirmEmail;