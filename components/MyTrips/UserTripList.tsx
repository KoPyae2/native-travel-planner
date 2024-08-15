import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '@/constants/Colors'
import UserTripCard from './UserTripCard'
import { useRouter } from 'expo-router'

export default function UserTripList({ userTrip }: { userTrip: any }) {
    const latestTrip = userTrip[0].tripData
    const router = useRouter()

    const test = {
        name:'test',
        age:22
    }

    return (
        <View>
            <View>
                {
                    latestTrip.locationInfo.photoRef ?
                        <Image
                            style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 12 }}
                            source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + latestTrip.locationInfo.photoRef + '&key='+process.env.EXPO_PUBLIC_GOOGLE_PLACE_API_KEY }} />
                        :
                        <Image
                            style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 12 }}
                            source={require('../../assets/images/getstart.jpg')} />
                }
                <View
                    style={{ marginTop: 6 }}>
                    <Text
                        style={{
                            fontFamily: 'roboto-bold',
                            fontSize: 20,
                        }}
                    >{userTrip[0].tripData.locationInfo.name}</Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'roboto-regular',
                                fontSize: 14,
                                color: Colors.Gray
                            }}
                        >{moment(latestTrip.startDate).format('DD MMM YYYY')}</Text>
                        <Text
                            style={{
                                fontFamily: 'roboto-regular',
                                fontSize: 14,
                                color: Colors.Gray
                            }}
                        >🚙 {latestTrip.traveleData.title}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => router.push({ pathname: '/tripDetails', params: { trip: JSON.stringify(userTrip[0]) } })}
                        style={{
                            backgroundColor: Colors.Primary,
                            padding: 12,
                            borderRadius: 12,
                            marginTop: 10
                        }}
                    >
                        <Text style={{ color: Colors.White, fontSize: 15, textAlign: 'center', fontFamily: 'roboto-bold' }}>See Your Plan</Text>
                    </TouchableOpacity>
                </View>
                {userTrip.map((trip: any, index: number) => (
                    <UserTripCard trip={trip} />
                ))}
            </View>
        </View>
    )
}