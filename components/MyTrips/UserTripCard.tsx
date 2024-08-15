import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function UserTripCard({ trip }: { trip: any }) {
    const router = useRouter()
    return (
        <Pressable 
        onPress={()=>router.push({ pathname: '/tripDetails', params: { trip: JSON.stringify(trip) } })}
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap:10,
            marginTop:20
        }}
        >
            <Image 
            style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 6 }}
            source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+trip.tripData.locationInfo.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_PLACE_API_KEY}} />

            <View>
                <Text style={{ fontFamily: 'roboto-bold', fontSize: 18 }}>
                    {trip.tripData.locationInfo.name}
                </Text>
                <Text style={{ fontFamily: 'roboto-regular', fontSize: 14,color:Colors.Gray }}>
                    {moment(trip.tripData.startDate).format('DD MMM YYYY')}
                </Text>
                <Text style={{ fontFamily: 'roboto-regular', fontSize: 14,color:Colors.Gray }}>
                    Traveling : {trip.tripData.traveleData.title}
                </Text>
            </View>
        </Pressable>
    )
}