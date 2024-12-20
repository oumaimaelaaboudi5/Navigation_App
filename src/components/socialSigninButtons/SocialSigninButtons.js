
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSigninButtons = () => {
    const onSigninFacebook = () => {
        console.warn("Facebook");
    }
    const onSigninGoogle = () => {
        console.warn("Google");
    }
    const onSigninX = () => {
        console.warn("X");
    }
    return (
        <>
            <CustomButton text="Sign in with Facebook"
                onPress={onSigninFacebook}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />

            <CustomButton text="Sign in with Google"
                onPress={onSigninGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44" />

            <CustomButton text="Sign in with X"
                onPress={onSigninX}
                bgColor="#e3e3e3"
                fgColor="#363636" />
        </>
    )
}

export default SocialSigninButtons;