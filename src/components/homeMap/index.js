import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const HomeMap = () => {
    const [mks, setMks] = useState([]);
    return (

        <MapView
            style={{ width: '100%', height: '100%' }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: 30.4280405,
                longitude: -9.5925444,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}>
            {mks.map((mk) => (
                <Marker
                    key={mk.id}
                    coordinate={{ latitude: mk.latitude, longitude: mk.longitude }}
                ></Marker>
            ))}

        </MapView>
    );
};

export default HomeMap;