import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GetPhotoRef } from '@/service/GooglePlaceApi';

export default function PlaceCard({ detail }: { detail: any }) {
    const [photoRef, setPhotoRef] = useState();

    const GetGooglePhotoRef = async (place: string) => {
        try {
            const result = await GetPhotoRef(place);
            setPhotoRef(result)
        }
        catch (error) {
            ToastAndroid.show('Error' + error, ToastAndroid.BOTTOM)
            
        }
    }
    useEffect(() => {
        GetGooglePhotoRef(detail.locationName)
    })
    return (
        <View style={{
            borderWidth: 1,
            borderColor: Colors.LightBlue,
            backgroundColor: Colors.LightBlue,
            borderRadius: 12,
            padding: 10,
            marginTop: 10
        }}>
            <Image style={{ width: '100%', height: 160, borderRadius: 12 }} source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photoRef + '&key='+process.env.EXPO_PUBLIC_GOOGLE_PLACE_API_KEY }} />
            <View style={{ padding: 5 }}>
                <Text style={styles.placeText}>{detail.locationName}</Text>
                <Text style={{ fontFamily: 'roboto-regular', color: Colors.Gray, fontSize: 14, paddingVertical: 10 }}>{detail.detail}</Text>
                <View
                >
                    <Text style={{ fontFamily: 'roboto-bold', fontSize: 14 }}>🎟️Ticket Price : {detail.ticketPrice || 'Free'}</Text>
                    <Text style={{ fontFamily: 'roboto-bold', fontSize: 14 }}>⏲️Time to visit : {detail.bestTimeToVisit || 'Any Time'}</Text>
                    <Text style={{ fontFamily: 'roboto-bold', fontSize: 14 }}>⌛Duration : {detail.timeForVisit || 'Depend on you'}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    dayText: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
        marginTop: 16
    },
    placeText: {
        fontFamily: 'roboto-bold',
        fontSize: 16,
    }
})