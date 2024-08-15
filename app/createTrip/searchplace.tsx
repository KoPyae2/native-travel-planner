import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Href, useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContex } from '@/context/CreateTripContex';

export default function SearchPlace() {
    const navigation = useNavigation()
    const { tripsData, setTripsData } = useContext<any>(CreateTripContex);
    const router = useRouter()

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: 'Search place',
            headerTitleAlign: 'center',
            headerTransparent: true
        })
    }, [])
    return (
        <View
            style={{
                padding: 20,
                paddingTop: 100,
                backgroundColor: Colors.White,
                height: '100%'
            }}
        >

            <GooglePlacesAutocomplete
                placeholder='Search Place'
                fetchDetails
                onPress={(data, details: any = null) => {
                    setTripsData({
                        locationInfo: {
                            name: data.description,
                            coordinate: details?.geometry.location,
                            photoRef: details?.photos[0]?.photo_reference,
                            url: details?.url
                        }
                    })
                    router.push('createTrip/selectTraveler' as Href<string | object>)
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_PLACE_API_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer: {
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 24
                    }
                }}
            />
        </View>
    )
}