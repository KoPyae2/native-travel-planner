import { View, Text, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetPhotoRef } from '@/service/GooglePlaceApi';

export default function HotelCard({ item }: { item: any }) {

    const [photoRef, setPhotoRef] = useState()
    const GetGooglePhotoRef = async (place: string) => {
        try{
            const result = await GetPhotoRef(place);
            setPhotoRef(result)
        }
        catch(error){
            ToastAndroid.show('Error' + error, ToastAndroid.BOTTOM)
        }
    }
    useEffect(() => {
        GetGooglePhotoRef(item.hotelName)
    })
    return (
        <View style={{ marginRight: 10, width: 180 }}>
            <Image
                style={{ width: 180, height: 120, borderRadius: 12 }}
                source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + photoRef + '&key='+process.env.EXPO_PUBLIC_GOOGLE_PLACE_API_KEY }} />
            <View style={{ padding: 5 }}>
                <Text numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontFamily: 'roboto-regular', fontSize: 16 }}>
                    {item.hotelName}
                </Text>
            </View>
            <View
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}
            >
                <Text style={{ fontFamily: 'roboto-regular', fontSize: 16 }}>
                    ⭐{item.rating}
                </Text>
                <Text numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontFamily: 'roboto-regular', fontSize: 16, width: 100 }}>
                    🪙{item.price}
                </Text>
            </View>
        </View>
    )
}