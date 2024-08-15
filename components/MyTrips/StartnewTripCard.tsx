import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Href, useRouter } from 'expo-router'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function StartnewTripCard() {
    const router = useRouter()
    return (
        <Animated.View
        entering={FadeInDown.delay(500).springify()}
            style={{
                backgroundColor: Colors.White,
                padding: 20,
                marginTop: 50,
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 26
            }}
        >
            <Ionicons name="location" size={30} color="black" />
            <Text
                style={{
                    fontFamily: 'roboto-bold',
                    fontSize: 20,
                }}
            >No Trips planned yet</Text>
            <Text
                style={{
                    fontFamily: 'roboto-regular',
                    fontSize: 20,
                    color: Colors.Gray,
                    textAlign: 'center',
                    paddingHorizontal: 10
                }}
            >Look like its time to plan a new travel experinece! Get Started below</Text>
            <TouchableOpacity
            onPress={() => router.push('/createTrip/searchplace' as Href<string | object>)}
                style={{
                    marginTop: 20,
                    padding: 15,
                    paddingHorizontal: 50,
                    backgroundColor: Colors.Primary,
                    borderRadius: 20,
                }}
            >
                <Text
                    style={{
                        color: Colors.White,
                        textAlign: 'center',
                        fontFamily: 'roboto-bold',
                        fontSize: 18
                    }}>
                    Start new Trip
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}