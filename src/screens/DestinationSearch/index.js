import { View, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const DestinationSearch = () => {

    const [fromText, setFromText] = useState('');
    const [destinationText, setdestinationText] = useState('');

    const navigation = useNavigation();

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const checkNavigation = () => {
        if (originPlace && destinationPlace) {
            navigation.navigate('SearchResults', {
                originPlace,
                destinationPlace,
            })
        }
    }

    useEffect(() => {
        checkNavigation();
    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView >
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyARu9eFWPJ_yfO5-mMcPOflEWo49BIkRdU',
                        language: 'en',
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyARu9eFWPJ_yfO5-mMcPOflEWo49BIkRdU',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;