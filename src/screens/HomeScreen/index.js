
import { View, Dimensions } from "react-native";
import React from 'react'
import HomeMap from '../../components/homeMap';
import HomeSearch from '../../components/homeSearch/HomeSearch';
import DestinationSearch from '../DestinationSearch';
const Index = () => {
    return (
        <View>
            <View style={{ height: Dimensions.get('window').height - 400 }}>
                <HomeMap />
            </View>
            <HomeSearch />
        </View>
    );
};

export default Index