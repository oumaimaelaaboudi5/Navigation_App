import { View, Text, Pressable } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Styles from './Styles';


const HomeSearch = () => {
    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('DestinationSearch')
    }
    return (
        <View>
            {/*input box */}
            <Pressable onPress={goToSearch} style={Styles.inputBox}>
                <Text style={Styles.inputText}>Where To?</Text>

                <View style={Styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} />
                </View>
            </Pressable>
            {/*previous destination */}
            <View style={Styles.row}>
                <View style={Styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
                </View>
                <Text style={Styles.destinationText}>Spin Nightclub </Text>
            </View>

            {/*home destination */}
            <View style={Styles.row}>
                <View style={[Styles.iconContainer, { backgroundColor: '#10ddc2' }]}>
                    <Entypo name={'home'} size={20} color={'#ffffff'} />
                </View>
                <Text style={Styles.destinationText}>Home </Text>
            </View>
        </View>
    )
}

export default HomeSearch