import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Custominput from '../../components/Custominput/Custominput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPassword = () => {

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const onSendPressed = () => {
        navigation.navigate('NewPassword');
    }
    const onSignInPressed = () => {
        navigation.navigate('Signin');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

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

                <CustomButton text="Send"
                    onPress={onSendPressed} />

                <CustomButton text="Back to Sign in "
                    onPress={handleSubmit(onSignInPressed)}
                    type="TERTIARY" />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        marginTop: 100,
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
export default ForgotPassword;